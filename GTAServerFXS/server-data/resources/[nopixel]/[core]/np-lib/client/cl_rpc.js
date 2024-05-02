const Functions = new Map();
const Promises = new Map();
const Resource = GetCurrentResourceName()
let CallIdentifier = 0

function TriggerNetEvent(pEvent, ...params) {
  const payload = msgpack_pack(params);

  payload.length < 5000
    ? TriggerServerEventInternal(pEvent, payload, payload.length)
    : TriggerLatentServerEventInternal(
        pEvent,
        payload,
        payload.length,
        128000
    )
}

function ParamPacker(...params) {
  const pack = [];
  
  for (let i = 0; i < params.length; i += 1) {
    pack[i] = { 
        "param": params[i] 
    }
  }

  return pack
}

function ParamUnpacker(params) {
  const pack = []
  return params.forEach(idx => pack.push(idx["param"])), pack
}

async function rpcRegister(name, func) {
  Functions.set(name, func)
}

async function rpcExecute(name, ...params) {
  const callID = CallIdentifier
  CallIdentifier++

  const Call = new Promise((resolve, reject) => {
    Promises.set(callID, {
      "resolve": resolve,
      "reject": reject,
    })
  })

  TriggerNetEvent("rpc:request", Resource, name, callID, params, false)

  const clearPromise = new Promise((resolve) => {
    setTimeout(() => {
      if (Promises.has(callID)) {
        Promises.delete(callID)
      }
      return resolve([])
    }, 20000)
  })

  return await Promise.race([Call, clearPromise])
}

function rpcResponse(origin, callID, response, boolean) {
  if (Resource === origin && Promises.has(callID)) {
    boolean && (response = ParamUnpacker(response)),
    Promises.get(callID).resolve(response),
    Promises.delete(callID);
  }
}

async function rpcRequest(origin, name, callID, params, boolean) {
  if (!Functions.has(name)) {
    return
  }

  const selectFunc = Functions.get(name);
  let response;

  boolean && (params = ParamUnpacker(params))

  try {
    response = await selectFunc(...params)
  } catch (error) {
    emit("rpc:client:error", Resource, origin, name, error["message"])
  }

  if (typeof response === "undefined") {
    response = []
  } else {
    boolean && (response = ParamPacker(response))
  }

  TriggerNetEvent("rpc:response", origin, callID, response, boolean)
}

const RPC = {
  "register": rpcRegister,
  "execute": rpcExecute,
}

onNet("rpc:response", rpcResponse)
onNet("rpc:request", rpcRequest)
