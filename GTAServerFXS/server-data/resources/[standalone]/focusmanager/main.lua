local ActiveUIFocus = nil
local HasUIFocus = false
local FocusHandlers = {}

function RegisterFocusHandler(resource, handler)
  FocusHandlers[resource] = handler
end

exports("RegisterFocusHandler", function(handler)
  RegisterFocusHandler(GetInvokingResource(), handler)
end)

function SetUIFocus(hasFocus, hasCursor, fromCommand)
  local invoking = GetInvokingResource()
  local handler = FocusHandlers[invoking]
  if not handler and not fromCommand then
    print('[ERROR] No focus handler for resource: ', invoking)
    return
  end

  if HasUIFocus and ActiveUIFocus ~= invoking then
    local oldHandler = FocusHandlers[ActiveUIFocus]
    if oldHandler then
      TriggerEvent('focusmanager:focusChanged', ActiveUIFocus, false, false)
      oldHandler(false, false)
    end
  end

  if hasFocus then
    ActiveUIFocus = invoking
    HasUIFocus = true
  else
    ActiveUIFocus = nil
    HasUIFocus = false
  end

  TriggerEvent('focusmanager:focusChanged', invoking, hasFocus, hasCursor)
  if handler then
    handler(hasFocus, hasCursor)
  end
end

exports("SetUIFocus", SetUIFocus)

exports("HasUIFocus", function()
  return HasUIFocus
end)

exports("GetActiveUIFocus", function()
  return ActiveUIFocus
end)

RegisterNetEvent("focusmanager:clearFocus", function()
  SetUIFocus(false, false, true)
end)

RegisterNetEvent("nui-toggle", function()
  SetUIFocus(false, false, true)
end)
