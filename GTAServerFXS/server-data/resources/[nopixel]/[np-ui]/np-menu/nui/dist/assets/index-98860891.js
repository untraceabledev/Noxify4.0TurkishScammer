true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const equalFn = (a, b) => a === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const signalOptions = {
  equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
let Transition = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener,
    owner = Owner,
    unowned = fn.length === 0,
    root = unowned ? UNOWNED : {
      owned: null,
      cleanups: null,
      context: null,
      owner: detachedOwner === undefined ? owner : detachedOwner
    },
    updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || undefined
  };
  const setter = value => {
    if (typeof value === "function") {
      value = value(s.value);
    }
    return writeSignal(s, value);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  if (!options || !options.render) c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || undefined;
  updateComputation(c);
  return readSignal.bind(c);
}
function untrack(fn) {
  if (Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    return fn();
  } finally {
    Listener = listener;
  }
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function readSignal() {
  if (this.sources && (this.state)) {
    if ((this.state) === STALE) updateComputation(this);else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) ;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
        }
        if (Updates.length > 10e5) {
          Updates = [];
          if (false) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
    listener = Listener,
    time = ExecCount;
  Listener = Owner = node;
  runComputation(node, node.value, time);
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue);
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state: state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Owner === null) ;else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  if ((node.state) === 0) return;
  if ((node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if ((node.state) === STALE) {
      updateComputation(node);
    } else if ((node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e), false);
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function runUserEffects(queue) {
  let i,
    userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);else queue[userLength++] = e;
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING;
      if (o.pure) Updates.push(o);else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
        index = node.sourceSlots.pop(),
        obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
          s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
  node.context = null;
}
function handleError(err) {
  throw err;
}

const FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [],
    mapped = [],
    disposers = [],
    len = 0,
    indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [],
      i,
      j;
    newItems[$TRACK];
    return untrack(() => {
      let newLen = newItems.length,
        newIndices,
        newIndicesNext,
        temp,
        tempdisposers,
        tempIndexes,
        start,
        end,
        newEnd,
        item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot(disposer => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      }
      else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === undefined ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== undefined && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
function createComponent(Comp, props) {
  return untrack(() => Comp(props || {}));
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY) return receiver;
    return _.get(property);
  },
  has(_, property) {
    if (property === $PROXY) return true;
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
  for (let i = 0, length = this.length; i < length; ++i) {
    const v = this[i]();
    if (v !== undefined) return v;
  }
}
function mergeProps(...sources) {
  let proxy = false;
  for (let i = 0; i < sources.length; i++) {
    const s = sources[i];
    proxy = proxy || !!s && $PROXY in s;
    sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
  }
  if (proxy) {
    return new Proxy({
      get(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          const v = resolveSource(sources[i])[property];
          if (v !== undefined) return v;
        }
      },
      has(property) {
        for (let i = sources.length - 1; i >= 0; i--) {
          if (property in resolveSource(sources[i])) return true;
        }
        return false;
      },
      keys() {
        const keys = [];
        for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
        return [...new Set(keys)];
      }
    }, propTraps);
  }
  const target = {};
  const sourcesMap = {};
  let someNonTargetKey = false;
  for (let i = sources.length - 1; i >= 0; i--) {
    const source = sources[i];
    if (!source) continue;
    const sourceKeys = Object.getOwnPropertyNames(source);
    someNonTargetKey = someNonTargetKey || i !== 0 && !!sourceKeys.length;
    for (let i = 0, length = sourceKeys.length; i < length; i++) {
      const key = sourceKeys[i];
      if (key === "__proto__" || key === "constructor") {
        continue;
      } else if (!(key in target)) {
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (desc.get) {
          Object.defineProperty(target, key, {
            enumerable: true,
            configurable: true,
            get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
          });
        } else target[key] = desc.value;
      } else {
        const sources = sourcesMap[key];
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (sources) {
          if (desc.get) {
            sources.push(desc.get.bind(source));
          } else if (desc.value !== undefined) {
            sources.push(() => desc.value);
          }
        } else if (target[key] === undefined) target[key] = desc.value;
      }
    }
  }
  return target;
}

const narrowedError = name => `Stale read from <${name}>.`;
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || undefined));
}
function Show(props) {
  const keyed = props.keyed;
  const condition = createMemo(() => props.when, undefined, {
    equals: (a, b) => keyed ? a === b : !a === !b
  });
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      return fn ? untrack(() => child(keyed ? c : () => {
        if (!untrack(condition)) throw narrowedError("Show");
        return props.when;
      })) : child;
    }
    return props.fallback;
  }, undefined, undefined);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
    aEnd = a.length,
    bEnd = bLength,
    aStart = 0,
    bStart = 0,
    after = a[aEnd - 1].nextSibling,
    map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart,
            sequence = 1,
            t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}

const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
  let disposer;
  createRoot(dispose => {
    disposer = dispose;
    element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
  }, options.owner);
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, isCE, isSVG) {
  let node;
  const create = () => {
    const t = document.createElement("template");
    t.innerHTML = html;
    return isSVG ? t.content.firstChild.firstChild : t.content.firstChild;
  };
  const fn = isCE ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function delegateEvents(eventNames, document = window.document) {
  const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}
function className(node, value) {
  if (value == null) node.removeAttribute("class");else node.className = value;
}
function classList(node, value, prev = {}) {
  const classKeys = Object.keys(value || {}),
    prevKeys = Object.keys(prev);
  let i, len;
  for (i = 0, len = prevKeys.length; i < len; i++) {
    const key = prevKeys[i];
    if (!key || key === "undefined" || value[key]) continue;
    toggleClassKey(node, key, false);
    delete prev[key];
  }
  for (i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
      classValue = !!value[key];
    if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
    toggleClassKey(node, key, true);
    prev[key] = classValue;
  }
  return prev;
}
function style(node, value, prev) {
  if (!value) return prev ? setAttribute(node, "style") : value;
  const nodeStyle = node.style;
  if (typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (nodeStyle.cssText = prev = undefined);
  prev || (prev = {});
  value || (value = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
}
function toggleClassKey(node, key, value) {
  const classNames = key.trim().split(/\s+/);
  for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
}
function eventHandler(e) {
  const key = `$$${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  while (node) {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble) return;
    }
    node = node._$host || node.parentNode || node.host;
  }
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
    multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else console.warn(`Unrecognized value. Skipped inserting`, value);
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
      prev = current && current[i],
      t;
    if (item == null || item === true || item === false) ; else if ((t = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}

const global = '';

const misc = '';

const _interface = '';

const item = '';

var parseNumber = parseFloat;
function joinCss(obj, separator) {
  if (separator === void 0) {
    separator = ';';
  }

  var texts;

  if (Array.isArray(obj)) {
    texts = obj.filter(function (text) {
      return text;
    });
  } else {
    texts = [];

    for (var prop in obj) {
      if (obj[prop]) {
        texts.push(prop + ":" + obj[prop]);
      }
    }
  }

  return texts.join(separator);
}
function getStyles(size, pull, fw) {
  var float;
  var width;
  var height = '1em';
  var lineHeight;
  var fontSize;
  var textAlign;
  var verticalAlign = '-.125em';
  var overflow = 'visible';

  if (fw) {
    textAlign = 'center';
    width = '1.25em';
  }

  if (pull) {
    float = pull;
  }

  if (size) {
    if (size === 'lg') {
      fontSize = '1.33333em';
      lineHeight = '.75em';
      verticalAlign = '-.225em';
    } else if (size === 'xs') {
      fontSize = '.75em';
    } else if (size === 'sm') {
      fontSize = '.875em';
    } else {
      fontSize = size.replace('x', 'em');
    }
  }

  return {
    float: float,
    width: width,
    height: height,
    'line-height': lineHeight,
    'font-size': fontSize,
    'text-align': textAlign,
    'vertical-align': verticalAlign,
    'transform-origin': 'center',
    overflow: overflow
  };
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes, translateUnit, rotateUnit) {
  if (translateTimes === void 0) {
    translateTimes = 1;
  }

  if (translateUnit === void 0) {
    translateUnit = '';
  }

  if (rotateUnit === void 0) {
    rotateUnit = '';
  }

  var flipX = 1;
  var flipY = 1;

  if (flip) {
    if (flip === 'horizontal') {
      flipX = -1;
    } else if (flip === 'vertical') {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }

  return joinCss(["translate(" + parseNumber(translateX) * translateTimes + translateUnit + "," + parseNumber(translateY) * translateTimes + translateUnit + ")", "scale(" + flipX * parseNumber(scale) + "," + flipY * parseNumber(scale) + ")", rotate && "rotate(" + rotate + rotateUnit + ")"], ' ');
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "._1yhTRa{animation:_1yhTRa 2s linear 0s infinite}._2dBo7A{animation:_1yhTRa 1s steps(8) infinite}@keyframes _1yhTRa{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
var style$1 = {"spin":"_1yhTRa","pulse":"_2dBo7A"};
styleInject(css_248z$1);

const _tmpl$$2 = template(`<svg><path></path></svg>`, 4, true),
      _tmpl$2$1 = template(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g><g></g></g></svg>`, 6);
function Fa(props) {
  props = mergeProps({
    scale: 1,
    translateX: 0,
    translateY: 0,
    primaryOpacity: 1,
    secondaryOpacity: 0.4
  }, props);
  var i = createMemo(function () {
    var _props$icon;

    return ((_props$icon = props.icon) == null ? void 0 : _props$icon.icon) || [0, 0, '', [], ''];
  });
  var s = createMemo(function () {
    return getStyles(props.size, props.pull, props.fw);
  });
  var transform = createMemo(function () {
    return getTransform(props.scale, props.translateX, props.translateY, props.rotate, props.flip, 512);
  });
  return function () {
    var _el$ = _tmpl$2$1.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild;

    insert(_el$3, createComponent(Show, {
      get when() {
        return typeof i()[4] === 'string';
      },

      get fallback() {
        return [function () {
          var _el$5 = _tmpl$$2.cloneNode(true);

          createRenderEffect(function (_p$) {
            var _v$10 = i()[4][0],
                _v$11 = props.secondaryColor || props.color || 'currentColor',
                _v$12 = props.swapOpacity != false ? props.primaryOpacity : props.secondaryOpacity,
                _v$13 = "translate(" + i()[0] / -2 + " " + i()[1] / -2 + ")";

            _v$10 !== _p$._v$10 && setAttribute(_el$5, "d", _p$._v$10 = _v$10);
            _v$11 !== _p$._v$11 && setAttribute(_el$5, "fill", _p$._v$11 = _v$11);
            _v$12 !== _p$._v$12 && setAttribute(_el$5, "fill-opacity", _p$._v$12 = _v$12);
            _v$13 !== _p$._v$13 && setAttribute(_el$5, "transform", _p$._v$13 = _v$13);
            return _p$;
          }, {
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined,
            _v$13: undefined
          });

          return _el$5;
        }(), function () {
          var _el$6 = _tmpl$$2.cloneNode(true);

          createRenderEffect(function (_p$) {
            var _v$14 = i()[4][1],
                _v$15 = props.primaryColor || props.color || 'currentColor',
                _v$16 = props.swapOpacity != false ? props.secondaryOpacity : props.primaryOpacity,
                _v$17 = "translate(" + i()[0] / -2 + " " + i()[1] / -2 + ")";

            _v$14 !== _p$._v$14 && setAttribute(_el$6, "d", _p$._v$14 = _v$14);
            _v$15 !== _p$._v$15 && setAttribute(_el$6, "fill", _p$._v$15 = _v$15);
            _v$16 !== _p$._v$16 && setAttribute(_el$6, "fill-opacity", _p$._v$16 = _v$16);
            _v$17 !== _p$._v$17 && setAttribute(_el$6, "transform", _p$._v$17 = _v$17);
            return _p$;
          }, {
            _v$14: undefined,
            _v$15: undefined,
            _v$16: undefined,
            _v$17: undefined
          });

          return _el$6;
        }()];
      },

      get children() {
        var _el$4 = _tmpl$$2.cloneNode(true);

        createRenderEffect(function (_p$) {
          var _v$ = i()[4],
              _v$2 = props.color || props.primaryColor || 'currentColor',
              _v$3 = "translate(" + i()[0] / -2 + " " + i()[1] / -2 + ")";

          _v$ !== _p$._v$ && setAttribute(_el$4, "d", _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && setAttribute(_el$4, "fill", _p$._v$2 = _v$2);
          _v$3 !== _p$._v$3 && setAttribute(_el$4, "transform", _p$._v$3 = _v$3);
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });

        return _el$4;
      }

    }));

    createRenderEffect(function (_p$) {
      var _v$18;

      var _v$4 = (_v$18 = {
        fa: true
      }, _v$18[style$1.spin] = props.spin, _v$18[style$1.pulse] = props.pulse, _v$18),
          _v$5 = s(),
          _v$6 = "0 0 " + i()[0] + " " + i()[1],
          _v$7 = "translate(" + i()[0] / 2 + " " + i()[1] / 2 + ")",
          _v$8 = i()[0] / 4 + " 0",
          _v$9 = transform();

      _p$._v$4 = classList(_el$, _v$4, _p$._v$4);
      _p$._v$5 = style(_el$, _v$5, _p$._v$5);
      _v$6 !== _p$._v$6 && setAttribute(_el$, "viewBox", _p$._v$6 = _v$6);
      _v$7 !== _p$._v$7 && setAttribute(_el$2, "transform", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && setAttribute(_el$2, "transform-origin", _p$._v$8 = _v$8);
      _v$9 !== _p$._v$9 && setAttribute(_el$3, "transform", _p$._v$9 = _v$9);
      return _p$;
    }, {
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined
    });

    return _el$;
  }();
}

var css_248z = "._2RIh6I{display:inline-block;position:relative}._2RIh6I .fa{position:absolute;bottom:0;left:0;right:0;top:0;margin:auto;text-align:center}._2RIh6I .layers-text{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._2RIh6I .layers-text span{display:inline-block}";
styleInject(css_248z);

template(`<span></span>`, 2);

template(`<span class="layers-text"><span></span></span>`, 4);

var faTrashCan = {
  prefix: 'fas',
  iconName: 'trash-can',
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]
};
var faTrashAlt = faTrashCan;
var faDoorOpen = {
  prefix: 'fas',
  iconName: 'door-open',
  icon: [576, 512, [], "f52b", "M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"]
};
var faRightFromBracket = {
  prefix: 'fas',
  iconName: 'right-from-bracket',
  icon: [512, 512, ["sign-out-alt"], "f2f5", "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]
};
var faSignOutAlt = faRightFromBracket;
var faPumpMedical = {
  prefix: 'fas',
  iconName: 'pump-medical',
  icon: [448, 512, [], "e06a", "M128 32v96H256V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L372.7 55.4c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zM117.4 160c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512H285.2c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7H117.4zM216 280v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V360H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V280c0-13.3 10.7-24 24-24s24 10.7 24 24z"]
};
var faFingerprint = {
  prefix: 'fas',
  iconName: 'fingerprint',
  icon: [512, 512, [], "f577", "M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z"]
};
var faMagnifyingGlassLocation = {
  prefix: 'fas',
  iconName: 'magnifying-glass-location',
  icon: [512, 512, ["search-location"], "f689", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
var faSearchLocation = faMagnifyingGlassLocation;
var faFaceSmileBeam = {
  prefix: 'fas',
  iconName: 'face-smile-beam',
  icon: [512, 512, [128522, "smile-beam"], "f5b8", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]
};
var faSmileBeam = faFaceSmileBeam;
var faBeerMugEmpty = {
  prefix: 'fas',
  iconName: 'beer-mug-empty',
  icon: [512, 512, ["beer"], "f0fc", "M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z"]
};
var faBeer = faBeerMugEmpty;
var faClipboardList = {
  prefix: 'fas',
  iconName: 'clipboard-list',
  icon: [384, 512, [], "f46d", "M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"]
};
var faUserCheck = {
  prefix: 'fas',
  iconName: 'user-check',
  icon: [640, 512, [], "f4fc", "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
};
var faUserNinja = {
  prefix: 'fas',
  iconName: 'user-ninja',
  icon: [448, 512, [129399], "f504", "M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"]
};
var faFaceGrinTongueSquint = {
  prefix: 'fas',
  iconName: 'face-grin-tongue-squint',
  icon: [512, 512, [128541, "grin-tongue-squint"], "f58a", "M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448V400.7c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V448c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM116 141.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 448V402.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V448c0 35.3 28.7 64 64 64s64-28.7 64-64z"]
};
var faGrinTongueSquint = faFaceGrinTongueSquint;
var faTabletScreenButton = {
  prefix: 'fas',
  iconName: 'tablet-screen-button',
  icon: [448, 512, ["tablet-alt"], "f3fa", "M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z"]
};
var faTabletAlt = faTabletScreenButton;
var faPaw = {
  prefix: 'fas',
  iconName: 'paw',
  icon: [512, 512, [], "f1b0", "M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]
};
var faFaceFlushed = {
  prefix: 'fas',
  iconName: 'face-flushed',
  icon: [512, 512, [128563, "flushed"], "f579", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM176 384c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm-16-88a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm264-72a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-288 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm192 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
};
var faFlushed = faFaceFlushed;
var faGavel = {
  prefix: 'fas',
  iconName: 'gavel',
  icon: [512, 512, ["legal"], "f0e3", "M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"]
};
var faBoxTissue = {
  prefix: 'fas',
  iconName: 'box-tissue',
  icon: [512, 512, [], "e05b", "M92.5 0H208c40 0 52 24 64 48s24 48 64 48h85.2C436 96 448 108 448 122.8c0 3.4-.7 6.8-1.9 10L409.6 224 384 288H128l-16-64L64.9 35.4c-.6-2.3-.9-4.6-.9-6.9C64 12.8 76.8 0 92.5 0zM79 224l16 64H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h48H384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H418.5l25.6-64H464c26.5 0 48 21.5 48 48V384H0V272c0-26.5 21.5-48 48-48H79zM0 416H512v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V416z"]
};
var faScissors = {
  prefix: 'fas',
  iconName: 'scissors',
  icon: [512, 512, [9984, 9986, 9988, "cut"], "f0c4", "M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
};
var faCut = faScissors;
var faSquareMinus = {
  prefix: 'fas',
  iconName: 'square-minus',
  icon: [448, 512, [61767, "minus-square"], "f146", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
};
var faMinusSquare = faSquareMinus;
var faLightbulb = {
  prefix: 'fas',
  iconName: 'lightbulb',
  icon: [384, 512, [128161], "f0eb", "M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]
};
var faCircleDollarToSlot = {
  prefix: 'fas',
  iconName: 'circle-dollar-to-slot',
  icon: [512, 512, ["donate"], "f4b9", "M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V304c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z"]
};
var faDonate = faCircleDollarToSlot;
var faGhost = {
  prefix: 'fas',
  iconName: 'ghost',
  icon: [384, 512, [128123], "f6e2", "M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
};
var faGamepad = {
  prefix: 'fas',
  iconName: 'gamepad',
  icon: [640, 512, [], "f11b", "M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"]
};
var faLock = {
  prefix: 'fas',
  iconName: 'lock',
  icon: [448, 512, [128274], "f023", "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]
};
var faGasPump = {
  prefix: 'fas',
  iconName: 'gas-pump',
  icon: [512, 512, [9981], "f52f", "M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"]
};
var faPenToSquare = {
  prefix: 'fas',
  iconName: 'pen-to-square',
  icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]
};
var faBagShopping = {
  prefix: 'fas',
  iconName: 'bag-shopping',
  icon: [448, 512, ["shopping-bag"], "f290", "M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
};
var faShoppingBag = faBagShopping;
var faUsers = {
  prefix: 'fas',
  iconName: 'users',
  icon: [640, 512, [], "f0c0", "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]
};
var faEyeSlash = {
  prefix: 'fas',
  iconName: 'eye-slash',
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
};
var faFaceKiss = {
  prefix: 'fas',
  iconName: 'face-kiss',
  icon: [512, 512, [128535, "kiss"], "f596", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48.7-198.3c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 443.1 257.4 448 240 448c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1 .3-.2 .6-.4c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.4-.3-.5-.3-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faKiss = faFaceKiss;
var faFaceGrinWink = {
  prefix: 'fas',
  iconName: 'face-grin-wink',
  icon: [512, 512, ["grin-wink"], "f58c", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM388.1 312.8c12.3-3.8 24.3 6.9 19.3 18.7C382.4 390.6 324.2 432 256.3 432s-126.2-41.4-151.1-100.5c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19zm-16.9-79.2c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faGrinWink = faFaceGrinWink;
var faEarDeaf = {
  prefix: 'fas',
  iconName: 'ear-deaf',
  icon: [512, 512, ["deaf", "deafness", "hard-of-hearing"], "f2a4", "M502.6 54.6l-40 40c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l40-40c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zm-320 320l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM240 128c-57.6 0-105.1 43.6-111.3 99.5c-1.9 17.6-17.8 30.2-35.3 28.3s-30.2-17.8-28.3-35.3C74.8 132.5 149.4 64 240 64c97.2 0 176 78.8 176 176c0 46-17.7 87.9-46.6 119.3c-12 13-17.4 24.8-17.4 34.7V400c0 61.9-50.1 112-112 112c-17.7 0-32-14.3-32-32s14.3-32 32-32c26.5 0 48-21.5 48-48v-6.1c0-32.9 17.4-59.6 34.4-78c18.4-20 29.6-46.6 29.6-75.9c0-61.9-50.1-112-112-112zm0 80c-17.7 0-32 14.3-32 32c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-17.7-14.3-32-32-32z"]
};
var faDeaf = faEarDeaf;
var faVial = {
  prefix: 'fas',
  iconName: 'vial',
  icon: [512, 512, [129514], "f492", "M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"]
};
var faDumpster = {
  prefix: 'fas',
  iconName: 'dumpster',
  icon: [576, 512, [], "f793", "M49.7 32c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160h94L140.5 32H49.7zM272 160V32H173.1L147.5 160H272zm32 0H428.5L402.9 32H304V160zm157.1 0h94c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1L549.2 48.9C546.1 38.9 536.8 32 526.3 32H435.5l25.6 128zM32 192l4 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H44L64 448c0 17.7 14.3 32 32 32s32-14.3 32-32H448c0 17.7 14.3 32 32 32s32-14.3 32-32l20-160h12c17.7 0 32-14.3 32-32s-14.3-32-32-32h-4l4-32H32z"]
};
var faKey = {
  prefix: 'fas',
  iconName: 'key',
  icon: [512, 512, [128273], "f084", "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]
};
var faLocationArrow = {
  prefix: 'fas',
  iconName: 'location-arrow',
  icon: [448, 512, [], "f124", "M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"]
};
var faBan = {
  prefix: 'fas',
  iconName: 'ban',
  icon: [512, 512, [128683, "cancel"], "f05e", "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]
};
var faBox = {
  prefix: 'fas',
  iconName: 'box',
  icon: [448, 512, [128230], "f466", "M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]
};
var faPersonRunning = {
  prefix: 'fas',
  iconName: 'person-running',
  icon: [448, 512, [127939, "running"], "f70c", "M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"]
};
var faRunning = faPersonRunning;
var faFileInvoiceDollar = {
  prefix: 'fas',
  iconName: 'file-invoice-dollar',
  icon: [384, 512, [], "f571", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V440c0 8.8-7.2 16-16 16s-16-7.2-16-16V422.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V232c0-8.8 7.2-16 16-16z"]
};
var faRightToBracket = {
  prefix: 'fas',
  iconName: 'right-to-bracket',
  icon: [512, 512, ["sign-in-alt"], "f2f6", "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
};
var faSignInAlt = faRightToBracket;
var faVenus = {
  prefix: 'fas',
  iconName: 'venus',
  icon: [384, 512, [9792], "f221", "M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"]
};
var faCrown = {
  prefix: 'fas',
  iconName: 'crown',
  icon: [576, 512, [128081], "f521", "M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]
};
var faUserGroup = {
  prefix: 'fas',
  iconName: 'user-group',
  icon: [640, 512, [128101, "user-friends"], "f500", "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"]
};
var faUserFriends = faUserGroup;
var faPersonWalking = {
  prefix: 'fas',
  iconName: 'person-walking',
  icon: [320, 512, [128694, "walking"], "f554", "M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"]
};
var faWalking = faPersonWalking;
var faFaceLaugh = {
  prefix: 'fas',
  iconName: 'face-laugh',
  icon: [512, 512, ["laugh"], "f599", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1H393.6c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faLaugh = faFaceLaugh;
var faWifi = {
  prefix: 'fas',
  iconName: 'wifi',
  icon: [640, 512, ["wifi-3", "wifi-strong"], "f1eb", "M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]
};
var faMapLocationDot = {
  prefix: 'fas',
  iconName: 'map-location-dot',
  icon: [576, 512, ["map-marked-alt"], "f5a0", "M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
};
var faMapMarkedAlt = faMapLocationDot;
var faGlasses = {
  prefix: 'fas',
  iconName: 'glasses',
  icon: [576, 512, [], "f530", "M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"]
};
var faTrain = {
  prefix: 'fas',
  iconName: 'train',
  icon: [448, 512, [128646], "f238", "M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
};
var faEyeLowVision = {
  prefix: 'fas',
  iconName: 'eye-low-vision',
  icon: [640, 512, ["low-vision"], "f2a8", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z"]
};
var faLowVision = faEyeLowVision;
var faMicrophone = {
  prefix: 'fas',
  iconName: 'microphone',
  icon: [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]
};
var faScrewdriver = {
  prefix: 'fas',
  iconName: 'screwdriver',
  icon: [512, 512, [129691], "f54a", "M465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19v54.1l-85.6 85.6c6.7 4.2 13 9.3 18.8 15.1s10.9 12.2 15.1 18.8L353.9 192H408c7.5 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6L465 7zM121.4 281.4l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3s-79.1-30.2-109.3 0z"]
};
var faRotateLeft = {
  prefix: 'fas',
  iconName: 'rotate-left',
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]
};
var faUndoAlt = faRotateLeft;
var faCannabis = {
  prefix: 'fas',
  iconName: 'cannabis',
  icon: [512, 512, [], "f55f", "M256 0c5.3 0 10.3 2.7 13.3 7.1c15.8 23.5 36.7 63.7 49.2 109c7.2 26.4 11.8 55.2 10.4 84c11.5-8.8 23.7-16.7 35.8-23.6c41-23.3 84.4-36.9 112.2-42.5c5.2-1 10.7 .6 14.4 4.4s5.4 9.2 4.4 14.5c-5.6 27.7-19.3 70.9-42.7 111.7c-9.1 15.9-19.9 31.7-32.4 46.3c27.8 6.6 52.4 17.3 67.2 25.5c5.1 2.8 8.2 8.2 8.2 14s-3.2 11.2-8.2 14c-15.2 8.4-40.9 19.5-69.8 26.1c-20.2 4.6-42.9 7.2-65.2 4.6l8.3 33.1c1.5 6.1-.6 12.4-5.5 16.4s-11.6 4.6-17.2 1.9L280 417.2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V417.2l-58.5 29.1c-5.6 2.8-12.3 2.1-17.2-1.9s-7-10.3-5.5-16.4l8.3-33.1c-22.2 2.6-45 0-65.2-4.6c-28.9-6.6-54.6-17.6-69.8-26.1c-5.1-2.8-8.2-8.2-8.2-14s3.2-11.2 8.2-14c14.8-8.2 39.4-18.8 67.2-25.5C78.9 296.3 68.1 280.5 59 264.6c-23.4-40.8-37.1-84-42.7-111.7c-1.1-5.2 .6-10.7 4.4-14.5s9.2-5.4 14.4-4.4c27.9 5.5 71.2 19.2 112.2 42.5c12.1 6.9 24.3 14.7 35.8 23.6c-1.4-28.7 3.1-57.6 10.4-84c12.5-45.3 33.4-85.5 49.2-109c3-4.4 8-7.1 13.3-7.1z"]
};
var faChair = {
  prefix: 'fas',
  iconName: 'chair',
  icon: [448, 512, [129681], "f6c0", "M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32V384H352v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288H48z"]
};
var faBomb = {
  prefix: 'fas',
  iconName: 'bomb',
  icon: [512, 512, [128163], "f1e2", "M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z"]
};
var faFaceTired = {
  prefix: 'fas',
  iconName: 'face-tired',
  icon: [512, 512, [128555, "tired"], "f5c8", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.7 328.7c22-22 53.9-40.7 91.3-40.7s69.3 18.7 91.3 40.7c11.1 11.1 20.1 23.4 26.4 35.4c6.2 11.7 10.3 24.4 10.3 35.9c0 5.2-2.6 10.2-6.9 13.2s-9.8 3.7-14.7 1.8l-20.5-7.7c-26.9-10.1-55.5-15.3-84.3-15.3h-3.2c-28.8 0-57.3 5.2-84.3 15.3L149.6 415c-4.9 1.8-10.4 1.2-14.7-1.8s-6.9-7.9-6.9-13.2c0-11.6 4.2-24.2 10.3-35.9c6.3-12 15.3-24.3 26.4-35.4zm-31.2-182l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]
};
var faTired = faFaceTired;
var faSmog = {
  prefix: 'fas',
  iconName: 'smog',
  icon: [640, 512, [], "f75f", "M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z"]
};
var faCrutch = {
  prefix: 'fas',
  iconName: 'crutch',
  icon: [512, 512, [], "f7f7", "M297.4 9.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0zm-96 144l-34.8 34.8c-12.9 12.9-21.9 29.2-25.8 47.1L116.8 342.9c-1.3 5.9-4.3 11.4-8.6 15.7L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l98.8-98.8c4.3-4.3 9.7-7.3 15.7-8.6l107.6-23.9c17.8-4 34.1-12.9 47.1-25.8l34.7-34.7c0 0 .1-.1 .1-.1s.1-.1 .1-.1l74.6-74.6-45.3-45.3L336 242.7 269.3 176l52.1-52.1L276.1 78.6l-74.7 74.7zM224 221.3L290.7 288l-12.2 12.2c-4.3 4.3-9.7 7.3-15.7 8.6l-76.7 17 17-76.7c1.3-5.9 4.3-11.4 8.6-15.7L224 221.3z"]
};
var faLeftRight = {
  prefix: 'fas',
  iconName: 'left-right',
  icon: [512, 512, [8596, "arrows-alt-h"], "f337", "M504.3 273.6c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-192 0 0-56c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104C2.8 243 0 249.3 0 256s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22l0-56 192 0 0 56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104z"]
};
var faArrowsAltH = faLeftRight;
var faShieldHalved = {
  prefix: 'fas',
  iconName: 'shield-halved',
  icon: [512, 512, ["shield-alt"], "f3ed", "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]
};
var faShieldAlt = faShieldHalved;
var faCouch = {
  prefix: 'fas',
  iconName: 'couch',
  icon: [640, 512, [], "f4b8", "M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"]
};
var faNewspaper = {
  prefix: 'fas',
  iconName: 'newspaper',
  icon: [512, 512, [128240], "f1ea", "M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
};
var faMoneyCheckDollar = {
  prefix: 'fas',
  iconName: 'money-check-dollar',
  icon: [576, 512, ["money-check-alt"], "f53d", "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"]
};
var faMoneyCheckAlt = faMoneyCheckDollar;
var faMoneyCheck = {
  prefix: 'fas',
  iconName: 'money-check',
  icon: [576, 512, [], "f53c", "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zM376 160h80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24z"]
};
var faTaxi = {
  prefix: 'fas',
  iconName: 'taxi',
  icon: [512, 512, [128662, "cab"], "f1ba", "M192 0c-17.7 0-32 14.3-32 32V64c0 .1 0 .1 0 .2c-38.6 2.2-72.3 27.3-85.2 64.1L39.6 228.8C16.4 238.4 0 261.3 0 288V432v48c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V432H416v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V432 288c0-26.7-16.4-49.6-39.6-59.2L437.2 128.3c-12.9-36.8-46.6-62-85.2-64.1c0-.1 0-.1 0-.2V32c0-17.7-14.3-32-32-32H192zM165.4 128H346.6c13.6 0 25.7 8.6 30.2 21.4L402.9 224H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
var faFaceRollingEyes = {
  prefix: 'fas',
  iconName: 'face-rolling-eyes',
  icon: [512, 512, [128580, "meh-rolling-eyes"], "f5a5", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 368H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16zm32-144c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C208.5 175.6 224 198 224 224zm128 64c-35.3 0-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C400.5 175.6 416 198 416 224c0 35.3-28.7 64-64 64z"]
};
var faMehRollingEyes = faFaceRollingEyes;
var faScrewdriverWrench = {
  prefix: 'fas',
  iconName: 'screwdriver-wrench',
  icon: [512, 512, ["tools"], "f7d9", "M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
};
var faTools = faScrewdriverWrench;
var faRecycle = {
  prefix: 'fas',
  iconName: 'recycle',
  icon: [512, 512, [9842, 9850, 9851], "f1b8", "M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"]
};
var faSatelliteDish = {
  prefix: 'fas',
  iconName: 'satellite-dish',
  icon: [512, 512, [128225], "f7c0", "M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
};
var faMobileScreenButton = {
  prefix: 'fas',
  iconName: 'mobile-screen-button',
  icon: [384, 512, ["mobile-alt"], "f3cd", "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"]
};
var faMobileAlt = faMobileScreenButton;
var faWrench = {
  prefix: 'fas',
  iconName: 'wrench',
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
};
var faCircleQuestion = {
  prefix: 'fas',
  iconName: 'circle-question',
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
var faQuestionCircle = faCircleQuestion;
var faPhoneFlip = {
  prefix: 'fas',
  iconName: 'phone-flip',
  icon: [512, 512, [128381, "phone-alt"], "f879", "M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"]
};
var faPhoneAlt = faPhoneFlip;
var faTeethOpen = {
  prefix: 'fas',
  iconName: 'teeth-open',
  icon: [576, 512, [], "f62f", "M96 32C43 32 0 75 0 128v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-53-43-96-96-96H96zM224 96c26.5 0 48 21.5 48 48v56c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V144c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48v56c0 13.3-10.7 24-24 24H328c-13.3 0-24-10.7-24-24V144zM96 128c26.5 0 48 21.5 48 48v24c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V176c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48v24c0 13.3-10.7 24-24 24H456c-13.3 0-24-10.7-24-24V176zM96 480H480c53 0 96-43 96-96V352c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"]
};
var faFaceMehBlank = {
  prefix: 'fas',
  iconName: 'face-meh-blank',
  icon: [512, 512, [128566, "meh-blank"], "f5a4", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208.4-48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
};
var faMehBlank = faFaceMehBlank;
var faSquareParking = {
  prefix: 'fas',
  iconName: 'square-parking',
  icon: [448, 512, [127359, "parking"], "f540", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"]
};
var faParking = faSquareParking;
var faBasketShopping = {
  prefix: 'fas',
  iconName: 'basket-shopping',
  icon: [576, 512, ["shopping-basket"], "f291", "M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]
};
var faShoppingBasket = faBasketShopping;
var faFaceSadCry = {
  prefix: 'fas',
  iconName: 'face-sad-cry',
  icon: [512, 512, [128557, "sad-cry"], "f5b3", "M352 493.4c-29.6 12-62.1 18.6-96 18.6s-66.4-6.6-96-18.6V288c0-8.8-7.2-16-16-16s-16 7.2-16 16V477.8C51.5 433.5 0 350.8 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 94.8-51.5 177.5-128 221.8V288c0-8.8-7.2-16-16-16s-16 7.2-16 16V493.4zM195.2 233.6c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2c17.6-23.5 52.8-23.5 70.4 0zm121.6 0c17.6-23.5 52.8-23.5 70.4 0c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2zM208 336v32c0 26.5 21.5 48 48 48s48-21.5 48-48V336c0-26.5-21.5-48-48-48s-48 21.5-48 48z"]
};
var faSadCry = faFaceSadCry;
var faFaceFrown = {
  prefix: 'fas',
  iconName: 'face-frown',
  icon: [512, 512, [9785, "frown"], "f119", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faFrown = faFaceFrown;
var faDrumSteelpan = {
  prefix: 'fas',
  iconName: 'drum-steelpan',
  icon: [576, 512, [], "f56a", "M288 32c159.1 0 288 48 288 128V352c0 80-128.9 128-288 128S0 432 0 352V160C0 80 128.9 32 288 32zM528 160c0-9.9-8-29.9-55-49.8c-18.6-7.9-40.9-14.4-66-19.4l-27.8 43.6c-7.3 11.5-11.2 24.8-11.2 38.4c0 17.5 6.4 34.4 18.1 47.5l9.8 11c29.8-5.2 55.9-12.5 77.2-21.5c47.1-19.9 55-39.9 55-49.8zM349.2 237.3c-8-26.2-32.4-45.3-61.2-45.3s-53.3 19.1-61.2 45.3c19.4 1.7 39.9 2.7 61.2 2.7s41.8-.9 61.2-2.7zM169 90.8c-25.2 5-47.4 11.6-66 19.4C56 130.1 48 150.1 48 160s8 29.9 55 49.8c21.3 9 47.4 16.3 77.2 21.5l9.8-11c11.6-13.1 18.1-30 18.1-47.5c0-13.6-3.9-26.9-11.2-38.4L169 90.8zm56.3-8C224.5 87 224 91.5 224 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-4.5-.5-9-1.4-13.2C330.8 81 309.8 80 288 80s-42.8 1-62.6 2.8z"]
};
var faArrowRotateRight = {
  prefix: 'fas',
  iconName: 'arrow-rotate-right',
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
};
var faRedo = faArrowRotateRight;
var faBiohazard = {
  prefix: 'fas',
  iconName: 'biohazard',
  icon: [576, 512, [9763], "f780", "M173.2 0c-1.8 0-3.5 .7-4.8 2C138.5 32.3 120 74 120 120c0 26.2 6 50.9 16.6 73c-22 2.4-43.8 9.1-64.2 20.5C37.9 232.8 13.3 262.4 .4 296c-.7 1.7-.5 3.7 .5 5.2c2.2 3.7 7.4 4.3 10.6 1.3C64.2 254.3 158 245.1 205 324s-8.1 153.1-77.6 173.2c-4.2 1.2-6.3 5.9-4.1 9.6c1 1.6 2.6 2.7 4.5 3c36.5 5.9 75.2 .1 109.7-19.2c20.4-11.4 37.4-26.5 50.5-43.8c13.1 17.3 30.1 32.4 50.5 43.8c34.5 19.3 73.3 25.2 109.7 19.2c1.9-.3 3.5-1.4 4.5-3c2.2-3.7 .1-8.4-4.1-9.6C379.1 477.1 324 403 371 324s140.7-69.8 193.5-21.4c3.2 2.9 8.4 2.3 10.6-1.3c1-1.6 1.1-3.5 .5-5.2c-12.9-33.6-37.5-63.2-72.1-82.5c-20.4-11.4-42.2-18.1-64.2-20.5C450 170.9 456 146.2 456 120c0-46-18.5-87.7-48.4-118c-1.3-1.3-3-2-4.8-2c-5 0-8.4 5.2-6.7 9.9C421.7 80.5 385.6 176 288 176S154.3 80.5 179.9 9.9c1.7-4.7-1.6-9.9-6.7-9.9zM240 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM181.7 417.6c6.3-11.8 9.8-25.1 8.6-39.8c-19.5-18-34-41.4-41.2-67.8c-12.5-8.1-26.2-11.8-40-12.4c-9-.4-18.1 .6-27.1 2.7c7.8 57.1 38.7 106.8 82.9 139.4c6.8-6.7 12.6-14.1 16.8-22.1zM288 64c-28.8 0-56.3 5.9-81.2 16.5c2 8.3 5 16.2 9 23.5c6.8 12.4 16.7 23.1 30.1 30.3c13.3-4.1 27.5-6.3 42.2-6.3s28.8 2.2 42.2 6.3c13.4-7.2 23.3-17.9 30.1-30.3c4-7.3 7-15.2 9-23.5C344.3 69.9 316.8 64 288 64zM426.9 310c-7.2 26.4-21.7 49.7-41.2 67.8c-1.2 14.7 2.2 28.1 8.6 39.8c4.3 8 10 15.4 16.8 22.1c44.3-32.6 75.2-82.3 82.9-139.4c-9-2.2-18.1-3.1-27.1-2.7c-13.8 .6-27.5 4.4-40 12.4z"]
};
var faPenFancy = {
  prefix: 'fas',
  iconName: 'pen-fancy',
  icon: [512, 512, [128395, 10002], "f5ac", "M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z"]
};
var faTrash = {
  prefix: 'fas',
  iconName: 'trash',
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
};
var faUserSecret = {
  prefix: 'fas',
  iconName: 'user-secret',
  icon: [448, 512, [128373], "f21b", "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]
};
var faUserDoctor = {
  prefix: 'fas',
  iconName: 'user-doctor',
  icon: [448, 512, ["user-md"], "f0f0", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
};
var faUserMd = faUserDoctor;
var faCamera = {
  prefix: 'fas',
  iconName: 'camera',
  icon: [512, 512, [62258, "camera-alt"], "f030", "M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
};
var faCrosshairs = {
  prefix: 'fas',
  iconName: 'crosshairs',
  icon: [512, 512, [], "f05b", "M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faDumbbell = {
  prefix: 'fas',
  iconName: 'dumbbell',
  icon: [640, 512, [], "f44b", "M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]
};
var faRectangleList = {
  prefix: 'fas',
  iconName: 'rectangle-list',
  icon: [576, 512, ["list-alt"], "f022", "M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224z"]
};
var faListAlt = faRectangleList;
var faMoneyBill1 = {
  prefix: 'fas',
  iconName: 'money-bill-1',
  icon: [576, 512, ["money-bill-alt"], "f3d1", "M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"]
};
var faMoneyBillAlt = faMoneyBill1;
var faDna = {
  prefix: 'fas',
  iconName: 'dna',
  icon: [448, 512, [129516], "f471", "M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9l0 0 0 0 0 0-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5H283.3c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0S64 14.3 64 32H384c0-17.7 14.3-32 32-32zM338.6 384H109.4c-10.1 10.6-18.6 21.3-25.5 32H364.1c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128H338.6c10.1-10.7 18.6-21.3 25.5-32H83.9c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5H164.7z"]
};
var faStreetView = {
  prefix: 'fas',
  iconName: 'street-view',
  icon: [512, 512, [], "f21d", "M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"]
};
var faGear = {
  prefix: 'fas',
  iconName: 'gear',
  icon: [512, 512, [9881, "cog"], "f013", "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
};
var faCog = faGear;
var faVials = {
  prefix: 'fas',
  iconName: 'vials',
  icon: [512, 512, [], "f493", "M0 64C0 46.3 14.3 32 32 32H88h48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64zM136 96H88V256h48V96zM288 64c0-17.7 14.3-32 32-32h56 48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32zM424 96H376V256h48V96z"]
};
var faPiggyBank = {
  prefix: 'fas',
  iconName: 'piggy-bank',
  icon: [576, 512, [], "f4d3", "M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]
};
var faFlagUsa = {
  prefix: 'fas',
  iconName: 'flag-usa',
  icon: [448, 512, [], "f74d", "M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1v36.1l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-20.3-9-41.8-14.7-63.6-16.9v32.2c17.4 2.1 34.4 6.7 50.6 13.9l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 136.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 203.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 232.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 299.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 328.3v33.5c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 400v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V416 345.5 312.8 249.5 216.8 153.5 120.8 64 32C0 14.3 14.3 0 32 0zm80 96A16 16 0 1 0 80 96a16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-32 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]
};
var faPersonHiking = {
  prefix: 'fas',
  iconName: 'person-hiking',
  icon: [384, 512, ["hiking"], "f6ec", "M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"]
};
var faHiking = faPersonHiking;
var faFaceMeh = {
  prefix: 'fas',
  iconName: 'face-meh',
  icon: [512, 512, [128528, "meh"], "f11a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
};
var faMeh = faFaceMeh;
var faHouse = {
  prefix: 'fas',
  iconName: 'house',
  icon: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]
};
var faHome = faHouse;
var faTowerBroadcast = {
  prefix: 'fas',
  iconName: 'tower-broadcast',
  icon: [576, 512, ["broadcast-tower"], "f519", "M80.3 44C69.8 69.9 64 98.2 64 128s5.8 58.1 16.3 84c6.6 16.4-1.3 35-17.7 41.7s-35-1.3-41.7-17.7C7.4 202.6 0 166.1 0 128S7.4 53.4 20.9 20C27.6 3.6 46.2-4.3 62.6 2.3S86.9 27.6 80.3 44zM555.1 20C568.6 53.4 576 89.9 576 128s-7.4 74.6-20.9 108c-6.6 16.4-25.3 24.3-41.7 17.7S489.1 228.4 495.7 212c10.5-25.9 16.3-54.2 16.3-84s-5.8-58.1-16.3-84C489.1 27.6 497 9 513.4 2.3s35 1.3 41.7 17.7zM352 128c0 23.7-12.9 44.4-32 55.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V183.4c-19.1-11.1-32-31.7-32-55.4c0-35.3 28.7-64 64-64s64 28.7 64 64zM170.6 76.8C163.8 92.4 160 109.7 160 128s3.8 35.6 10.6 51.2c7.1 16.2-.3 35.1-16.5 42.1s-35.1-.3-42.1-16.5c-10.3-23.6-16-49.6-16-76.8s5.7-53.2 16-76.8c7.1-16.2 25.9-23.6 42.1-16.5s23.6 25.9 16.5 42.1zM464 51.2c10.3 23.6 16 49.6 16 76.8s-5.7 53.2-16 76.8c-7.1 16.2-25.9 23.6-42.1 16.5s-23.6-25.9-16.5-42.1c6.8-15.6 10.6-32.9 10.6-51.2s-3.8-35.6-10.6-51.2c-7.1-16.2 .3-35.1 16.5-42.1s35.1 .3 42.1 16.5z"]
};
var faBroadcastTower = faTowerBroadcast;
var faTruckPickup = {
  prefix: 'fas',
  iconName: 'truck-pickup',
  icon: [640, 512, [128763], "f63c", "M368.6 96l76.8 96H288V96h80.6zM224 80V192H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32H65.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32V224c0-17.7-14.3-32-32-32H527.4L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z"]
};
var faUpload = {
  prefix: 'fas',
  iconName: 'upload',
  icon: [512, 512, [], "f093", "M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
};
var faBolt = {
  prefix: 'fas',
  iconName: 'bolt',
  icon: [448, 512, [9889, "zap"], "f0e7", "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]
};
var faFaceLaughWink = {
  prefix: 'fas',
  iconName: 'face-laugh-wink',
  icon: [512, 512, ["laugh-wink"], "f59c", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1H393.6c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"]
};
var faLaughWink = faFaceLaughWink;
var faUserLock = {
  prefix: 'fas',
  iconName: 'user-lock',
  icon: [640, 512, [], "f502", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"]
};
var faEllipsis = {
  prefix: 'fas',
  iconName: 'ellipsis',
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
};
var faEllipsisH = faEllipsis;
var faCreditCard = {
  prefix: 'fas',
  iconName: 'credit-card',
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"]
};
var faCar = {
  prefix: 'fas',
  iconName: 'car',
  icon: [512, 512, [128664, "automobile"], "f1b9", "M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
};
var faBed = {
  prefix: 'fas',
  iconName: 'bed',
  icon: [640, 512, [128716], "f236", "M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]
};
var faHotdog = {
  prefix: 'fas',
  iconName: 'hotdog',
  icon: [512, 512, [127789], "f80f", "M488.6 23.4c31.2 31.2 31.2 81.9 0 113.1l-352 352c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l352-352c31.2-31.2 81.9-31.2 113.1 0zM443.3 92.7c-6.2-6.2-16.4-6.2-22.6 0c-12.5 12.5-23.8 15.1-37.5 17.6l-2.5 .4c-13.8 2.5-31.6 5.6-48 22c-16.7 16.7-20.9 36-24.1 50.9l0 0v0l-.2 1c-3.4 15.6-6 26.4-15.7 36.1s-20.5 12.3-36.1 15.7l-1 .2c-14.9 3.2-34.2 7.4-50.9 24.1s-20.9 36-24.1 50.9l-.2 1c-3.4 15.6-6 26.4-15.7 36.1c-9.2 9.2-18 10.8-32.7 13.4l0 0-.9 .2c-15.6 2.8-34.9 6.9-54.4 26.4c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0c12.5-12.5 23.8-15.1 37.5-17.6l2.5-.4c13.8-2.5 31.6-5.6 48-22c16.7-16.7 20.9-36 24.1-50.9l.2-1c3.4-15.6 6-26.4 15.7-36.1s20.5-12.3 36.1-15.7l1-.2c14.9-3.2 34.2-7.4 50.9-24.1s20.9-36 24.1-50.9l.2-1c3.4-15.6 6-26.4 15.7-36.1c9.2-9.2 18-10.8 32.7-13.4l.9-.2c15.6-2.8 34.9-6.9 54.4-26.4c6.2-6.2 6.2-16.4 0-22.6zM191.2 479.2l288-288L495 207c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L289 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17l-15.8-15.8zM17 305C6.1 294.1 0 279.4 0 264s6.1-30.1 17-41L223 17C233.9 6.1 248.6 0 264 0s30.1 6.1 41 17l15.8 15.8-288 288L17 305z"]
};
var faPersonWalkingWithCane = {
  prefix: 'fas',
  iconName: 'person-walking-with-cane',
  icon: [512, 512, ["blind"], "f29d", "M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8.4 32c-36.4 0-69.6 20.5-85.9 53.1L35.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L128 231.6v43.2c0 17 6.7 33.3 18.7 45.3L224 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V390.6c0-12.7-5.1-24.9-14.1-33.9L224 306.7V213.3l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8L268.8 166.4C250.7 142.2 222.2 128 192 128H167.6zM128.3 346.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zM450.8 505.1c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3c-5 3.8-10.5 6.4-16.2 7.9L450.8 505.1z"]
};
var faBlind = faPersonWalkingWithCane;
var faLink = {
  prefix: 'fas',
  iconName: 'link',
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
};
var faMagnifyingGlass = {
  prefix: 'fas',
  iconName: 'magnifying-glass',
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
};
var faSearch = faMagnifyingGlass;
var faPersonDotsFromLine = {
  prefix: 'fas',
  iconName: 'person-dots-from-line',
  icon: [576, 512, ["diagnoses"], "f470", "M288 176A88 88 0 1 0 288 0a88 88 0 1 0 0 176zM78.7 372.9c15-12.5 50-34.4 97.3-50.1V432H400V322.7c47.3 15.8 82.3 37.7 97.3 50.1c20.4 17 50.6 14.2 67.6-6.1s14.2-50.6-6.1-67.6c-12-10-30.1-22.5-53.2-35C497.2 278.4 481.7 288 464 288c-26.5 0-48-21.5-48-48c0-4.3 .6-8.4 1.6-12.4C379.1 215.9 335.3 208 288 208c-60.2 0-114.9 12.9-160 29.9c0 .7 0 1.4 0 2.1c0 26.5-21.5 48-48 48c-11.8 0-22.7-4.3-31-11.4c-13.1 8.1-23.7 15.9-31.7 22.5c-20.4 17-23.1 47.2-6.1 67.6s47.2 23.1 67.6 6.1zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM224 280a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM96 240a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm368 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]
};
var faDiagnoses = faPersonDotsFromLine;
var faTrashCanArrowUp = {
  prefix: 'fas',
  iconName: 'trash-can-arrow-up',
  icon: [448, 512, ["trash-restore-alt"], "f82a", "M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]
};
var faTrashRestoreAlt = faTrashCanArrowUp;
var faCarBurst = {
  prefix: 'fas',
  iconName: 'car-burst',
  icon: [640, 512, ["car-crash"], "f5e1", "M176 8c-6.6 0-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6l35.3-32.5 9.5-35.4 10.4-38.6c8-29.9 30.5-52.1 57.9-60.9l41-59.2c11.3-16.3 26.4-28.9 43.5-37.2c-.4-.6-.8-1.2-1.3-1.8c-4.1-5.1-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74C188.4 12 182.6 8 176 8zM367.7 161.5l135.6 36.3c6.5 1.8 11.3 7.4 11.8 14.2l4.6 56.5-201.5-54 32.2-46.6c3.8-5.6 10.8-8.1 17.3-6.4zm-69.9-30l-47.9 69.3c-21.6 3-40.3 18.6-46.3 41l-10.4 38.6-16.6 61.8-8.3 30.9c-4.6 17.1 5.6 34.6 22.6 39.2l15.5 4.1c17.1 4.6 34.6-5.6 39.2-22.6l8.3-30.9 247.3 66.3-8.3 30.9c-4.6 17.1 5.6 34.6 22.6 39.2l15.5 4.1c17.1 4.6 34.6-5.6 39.2-22.6l8.3-30.9L595 388l10.4-38.6c6-22.4-2.5-45.2-19.6-58.7l-6.8-84c-2.7-33.7-26.4-62-59-70.8L384.2 99.7c-32.7-8.8-67.3 4-86.5 31.8zm-17 131a24 24 0 1 1 -12.4 46.4 24 24 0 1 1 12.4-46.4zm217.9 83.2A24 24 0 1 1 545 358.1a24 24 0 1 1 -46.4-12.4z"]
};
var faCarCrash = faCarBurst;
var faFish = {
  prefix: 'fas',
  iconName: 'fish',
  icon: [576, 512, [128031], "f578", "M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
};
var faVolumeXmark = {
  prefix: 'fas',
  iconName: 'volume-xmark',
  icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]
};
var faVolumeMute = faVolumeXmark;
var faPlus = {
  prefix: 'fas',
  iconName: 'plus',
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
var faTrashArrowUp = {
  prefix: 'fas',
  iconName: 'trash-arrow-up',
  icon: [448, 512, ["trash-restore"], "f829", "M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"]
};
var faTrashRestore = faTrashArrowUp;
var faStore = {
  prefix: 'fas',
  iconName: 'store',
  icon: [576, 512, [], "f54e", "M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"]
};
var faBriefcaseMedical = {
  prefix: 'fas',
  iconName: 'briefcase-medical',
  icon: [512, 512, [], "f469", "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"]
};
var faHandMiddleFinger = {
  prefix: 'fas',
  iconName: 'hand-middle-finger',
  icon: [448, 512, [128405], "f806", "M232 0c-22.1 0-40 17.9-40 40V204.2c-8.5-7.6-19.7-12.2-32-12.2c-26.5 0-48 21.5-48 48v7 73c0 8.8-7.2 16-16 16s-16-7.2-16-16V264.3c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334V372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H304c70.7 0 128-57.3 128-128V320 288c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40z"]
};
var faPersonPraying = {
  prefix: 'fas',
  iconName: 'person-praying',
  icon: [448, 512, [128720, "pray"], "f683", "M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432H72c-22.1 0-40 17.9-40 40s17.9 40 40 40H280c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354l45-90z"]
};
var faPray = faPersonPraying;
var faWarehouse = {
  prefix: 'fas',
  iconName: 'warehouse',
  icon: [640, 512, [], "f494", "M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"]
};
var faSimCard = {
  prefix: 'fas',
  iconName: 'sim-card',
  icon: [384, 512, [], "f7c4", "M64 0H242.7c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM96 192c-17.7 0-32 14.3-32 32v32h64V192H96zM64 352h80 96 80V288H240 144 64v64zM320 224c0-17.7-14.3-32-32-32H256v64h64V224zM160 192v64h64V192H160zM288 448c17.7 0 32-14.3 32-32V384H256v64h32zM160 384v64h64V384H160zM64 416c0 17.7 14.3 32 32 32h32V384H64v32z"]
};
var faBuilding = {
  prefix: 'fas',
  iconName: 'building',
  icon: [384, 512, [127970, 61687], "f1ad", "M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]
};
var faDog = {
  prefix: 'fas',
  iconName: 'dog',
  icon: [576, 512, [128021], "f6d3", "M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"]
};
var faYinYang = {
  prefix: 'fas',
  iconName: 'yin-yang',
  icon: [512, 512, [9775], "f6ad", "M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96C150 448 64 362 64 256S150 64 256 64zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
};
var faBroom = {
  prefix: 'fas',
  iconName: 'broom',
  icon: [576, 512, [129529], "f51a", "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"]
};
var faTrailer = {
  prefix: 'fas',
  iconName: 'trailer',
  icon: [640, 512, [], "e041", "M48 32C21.5 32 0 53.5 0 80V336c0 26.5 21.5 48 48 48H65.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96H488h8H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V80c0-26.5-21.5-48-48-48H48zM80 96c8.8 0 16 7.2 16 16l0 131.2c-11.4 5.9-22.2 12.9-32 21V112c0-8.8 7.2-16 16-16zm96 128c-5.4 0-10.7 .2-16 .7L160 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112.7c-5.3-.5-10.6-.7-16-.7zm80 19.2L256 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 152.2c-9.8-8.1-20.6-15.2-32-21zM368 96c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16zm112 16l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16s16 7.2 16 16zM176 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faShoePrints = {
  prefix: 'fas',
  iconName: 'shoe-prints',
  icon: [640, 512, [], "f54b", "M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z"]
};
var faFaceGrinTongueWink = {
  prefix: 'fas',
  iconName: 'face-grin-tongue-wink',
  icon: [512, 512, [128540, "grin-tongue-wink"], "f58b", "M174.5 498.8C73.1 464.7 0 368.9 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 112.9-73.1 208.7-174.5 242.8C346.7 484 352 466.6 352 448V401.1c24.3-17.5 43.6-41.6 55.4-69.6c5-11.8-7-22.5-19.3-18.7c-39.7 12.2-84.5 19-131.8 19s-92.1-6.8-131.8-19c-12.3-3.8-24.3 6.9-19.3 18.7c11.7 27.8 30.8 51.7 54.8 69.2V448c0 18.6 5.3 36 14.5 50.8zm20.7-265.2c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2c17.6-23.5 52.8-23.5 70.4 0zM336 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM320 402.6V448c0 35.3-28.7 64-64 64s-64-28.7-64-64V402.6c0-14.7 11.9-26.6 26.6-26.6h2c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9h2c14.7 0 26.6 11.9 26.6 26.6zM336 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
};
var faGrinTongueWink = faFaceGrinTongueWink;
var faHandHolding = {
  prefix: 'fas',
  iconName: 'hand-holding',
  icon: [576, 512, [], "f4bd", "M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5 .5 0 1 1 -.9 .1 .5 .5 0 1 1 .9-.1z"]
};
var faLinkSlash = {
  prefix: 'fas',
  iconName: 'link-slash',
  icon: [640, 512, ["chain-broken", "chain-slash", "unlink"], "f127", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z"]
};
var faUnlink = faLinkSlash;
var faAnchor = {
  prefix: 'fas',
  iconName: 'anchor',
  icon: [576, 512, [9875], "f13d", "M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80H224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32V448H208c-53 0-96-43-96-96v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 88.4 71.6 160 160 160h80 80c88.4 0 160-71.6 160-160v-6.1l7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7V352c0 53-43 96-96 96H320V240h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H341.1z"]
};
var faFaceAngry = {
  prefix: 'fas',
  iconName: 'face-angry',
  icon: [512, 512, [128544, "angry"], "f556", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM338.7 395.9c6.6-5.9 7.1-16 1.2-22.6C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3c-5.9 6.6-5.4 16.7 1.2 22.6s16.7 5.4 22.6-1.2c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7c5.9 6.6 16 7.1 22.6 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"]
};
var faAngry = faFaceAngry;
var faScaleBalanced = {
  prefix: 'fas',
  iconName: 'scale-balanced',
  icon: [640, 512, [9878, "balance-scale"], "f24e", "M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"]
};
var faBalanceScale = faScaleBalanced;
var faHandFist = {
  prefix: 'fas',
  iconName: 'hand-fist',
  icon: [448, 512, [9994, "fist-raised"], "f6de", "M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]
};
var faFistRaised = faHandFist;
var faBriefcase = {
  prefix: 'fas',
  iconName: 'briefcase',
  icon: [512, 512, [128188], "f0b1", "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]
};
var faEarthEurope = {
  prefix: 'fas',
  iconName: 'earth-europe',
  icon: [512, 512, ["globe-europe"], "f7a2", "M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.7-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"]
};
var faGlobeEurope = faEarthEurope;
var faDatabase = {
  prefix: 'fas',
  iconName: 'database',
  icon: [448, 512, [], "f1c0", "M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"]
};
var faHands = {
  prefix: 'fas',
  iconName: 'hands',
  icon: [576, 512, ["sign-language", "signing"], "f2a7", "M544 160l-.1 72.6c-.1 52.2-24 101-64 133.1c.1-1.9 .1-3.8 .1-5.7v-8c0-71.8-37-138.6-97.9-176.7l-60.2-37.6c-8.6-5.4-17.9-8.4-27.3-9.4L248.7 48.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l78 135.1c3.3 5.7 10.7 7.7 16.4 4.4s7.7-10.7 4.4-16.4l-62-107.4c-6.6-11.5-2.7-26.2 8.8-32.8S362 5 368.6 16.5l68 117.8 0 0 0 0 43.3 75L480 160c0-17.7 14.4-32 32-32s32 14.4 32 32zM243.9 88.5L268.5 131c-13.9 4.5-26.4 13.7-34.7 27c-.9 1.4-1.7 2.9-2.5 4.4l-28.9-50c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zm-46.4 63.7l26.8 46.4c.6 6 2.1 11.8 4.3 17.4H224 210.7l0 0H179l-23-39.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zM260.9 175c9.4-15 29.1-19.5 44.1-10.2l60.2 37.6C416.7 234.7 448 291.2 448 352v8c0 83.9-68.1 152-152 152H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h92c6.6 0 12-5.4 12-12s-5.4-12-12-12H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H212c6.6 0 12-5.4 12-12s-5.4-12-12-12H56c-13.3 0-24-10.7-24-24s10.7-24 24-24H212c6.6 0 12-5.4 12-12s-5.4-12-12-12H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H224l0 0 0 0h93.2L271 219.1c-15-9.4-19.5-29.1-10.2-44.1z"]
};
var faSignLanguage = faHands;
var faFaceGrimace = {
  prefix: 'fas',
  iconName: 'face-grimace',
  icon: [512, 512, [128556, "grimace"], "f57f", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-112h-8V360l55.3 0c-3.8 22.7-23.6 40-47.3 40zm47.3-56L344 344V304h8c23.8 0 43.5 17.3 47.3 40zM328 344H264V304h64v40zm0 56H264V360h64v40zm-80-96v40l-64 0V304h64zm0 56v40H184V360l64 0zm-80-16H112.7c3.8-22.7 23.6-40 47.3-40h8v40zm0 56h-8c-23.8 0-43.5-17.3-47.3-40H168v40zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
var faGrimace = faFaceGrimace;
var faBandage = {
  prefix: 'fas',
  iconName: 'bandage',
  icon: [640, 512, [129657, "band-aid"], "f462", "M480 416h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H480V416zM448 96H192V416H448V96zM64 96C28.7 96 0 124.7 0 160V352c0 35.3 28.7 64 64 64h96V96H64zM248 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
};
var faBandAid = faBandage;
var faCircleXmark = {
  prefix: 'fas',
  iconName: 'circle-xmark',
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
};
var faTimesCircle = faCircleXmark;
var faUserClock = {
  prefix: 'fas',
  iconName: 'user-clock',
  icon: [640, 512, [], "f4fd", "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V304c0-8.8-7.2-16-16-16z"]
};
var faMask = {
  prefix: 'fas',
  iconName: 'mask',
  icon: [576, 512, [], "f6fa", "M288 64C64 64 0 160 0 272S80 448 176 448h8.4c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4H400c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
};
var faSyringe = {
  prefix: 'fas',
  iconName: 'syringe',
  icon: [512, 512, [128137], "f48e", "M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4H97.9L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V325.3c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z"]
};
var faUserInjured = {
  prefix: 'fas',
  iconName: 'user-injured',
  icon: [448, 512, [], "f728", "M240 80H342.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM124 312.4c-9.7 3.1-19.1 7-28 11.7V512H243.7L181.5 408.2 124 312.4zm33-7.2L204.3 384H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3c-7.2 0-14.3 .4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48H223.5l57.1 95.2C303 507.2 320 487.6 320 464z"]
};
var faDollarSign = {
  prefix: 'fas',
  iconName: 'dollar-sign',
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"]
};
var faMagnifyingGlassDollar = {
  prefix: 'fas',
  iconName: 'magnifying-glass-dollar',
  icon: [512, 512, ["search-dollar"], "f688", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104z"]
};
var faSearchDollar = faMagnifyingGlassDollar;
var faMasksTheater = {
  prefix: 'fas',
  iconName: 'masks-theater',
  icon: [640, 512, [127917, "theater-masks"], "f630", "M74.6 373.2c41.7 36.1 108 82.5 166.1 73.7c6.1-.9 12.1-2.5 18-4.5c-9.2-12.3-17.3-24.4-24.2-35.4c-21.9-35-28.8-75.2-25.9-113.6c-20.6 4.1-39.2 13-54.7 25.4c-6.5 5.2-16.3 1.3-14.8-7c6.4-33.5 33-60.9 68.2-66.3c2.6-.4 5.3-.7 7.9-.8l19.4-131.3c2-13.8 8-32.7 25-45.9C278.2 53.2 310.5 37 363.2 32.2c-.8-.7-1.6-1.4-2.4-2.1C340.6 14.5 288.4-11.5 175.7 5.6S20.5 63 5.7 83.9C0 91.9-.8 102 .6 111.8L24.8 276.1c5.5 37.3 21.5 72.6 49.8 97.2zm87.7-219.6c4.4-3.1 10.8-2 11.8 3.3c.1 .5 .2 1.1 .3 1.6c3.2 21.8-11.6 42-33.1 45.3s-41.5-11.8-44.7-33.5c-.1-.5-.1-1.1-.2-1.6c-.6-5.4 5.2-8.4 10.3-6.7c9 3 18.8 3.9 28.7 2.4s19.1-5.3 26.8-10.8zM261.6 390c29.4 46.9 79.5 110.9 137.6 119.7s124.5-37.5 166.1-73.7c28.3-24.5 44.3-59.8 49.8-97.2l24.2-164.3c1.4-9.8 .6-19.9-5.1-27.9c-14.8-20.9-57.3-61.2-170-78.3S299.4 77.2 279.2 92.8c-7.8 6-11.5 15.4-12.9 25.2L242.1 282.3c-5.5 37.3-.4 75.8 19.6 107.7zM404.5 235.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6c-1 5.3-7.4 6.4-11.8 3.3zm136.2 15.5c-1 5.3-7.4 6.4-11.8 3.3c-7.7-5.5-16.8-9.3-26.8-10.8s-19.8-.6-28.7 2.4c-5.1 1.7-10.9-1.3-10.3-6.7c.1-.5 .1-1.1 .2-1.6c3.2-21.8 23.2-36.8 44.7-33.5s36.3 23.5 33.1 45.3c-.1 .5-.2 1.1-.3 1.6zM530 350.2c-19.6 44.7-66.8 72.5-116.8 64.9s-87.1-48.2-93-96.7c-1-8.3 8.9-12.1 15.2-6.7c23.9 20.8 53.6 35.3 87 40.3s66.1 .1 94.9-12.8c7.6-3.4 16 3.2 12.6 10.9z"]
};
var faTheaterMasks = faMasksTheater;

const iconMap = {
  'more': faEllipsisH,
  'globe-europe': faGlobeEurope,
  'car': faCar,
  'walking': faWalking,
  'eye-lash': faEyeSlash,
  'steal': faShoppingBag,
  'oxygen-mask': faMask,
  'animation-default': faMeh,
  //   'animation-brave': FaI.faWolfPackBattalion,
  'animation-sassy': faKiss,
  'animation-more': faEllipsisH,
  'animation-chichi': faYinYang,
  'animation-dean': faFingerprint,
  'animation-maneater': faGrinTongueWink,
  'animation-shady': faUserNinja,
  'animation-swagger': faBlind,
  'animation-money': faMoneyBillAlt,
  'animation-hobo': faDumpster,
  'animation-nonchalant': faMeh,
  //   'animation-alien': FaI.faRedditAlien,
  'animation-posh': faCrown,
  'animation-sad': faFrown,
  'animation-tough': faDumbbell,
  'animation-injured': faCrutch,
  'animation-tipsy': faBeer,
  'animation-drunk': faBeer,
  'animation-business': faBriefcase,
  'animation-hurry': faRunning,
  'animation-hiking': faHiking,
  'animation-arrogant': faMehRollingEyes,
  'animation-confident': faGrinWink,
  'animation-scared': faFlushed,
  'animation-female': faVenus,
  'animation-flee': faGhost,
  'animation-quick': faRunning,
  'animation-gangster': faDollarSign,
  'animation-wide': faArrowsAltH,
  'animation-casual': faCouch,
  'k9': faPaw,
  'k9-spawn': faPlus,
  'k9-dismiss': faTimesCircle,
  'k9-follow': faHotdog,
  'k9-vehicle': faTruckPickup,
  'k9-sit': faCouch,
  'k9-lay': faBed,
  'k9-stand': faDog,
  'k9-sniff': faSearch,
  'k9-sniff-vehicle': faBiohazard,
  'k9-huntfind': faSearchLocation,
  'police-dead': faSadCry,
  'ems-dead': faSadCry,
  'general': faCog,
  'general-emotes': faMehBlank,
  'general-keys-give': faKey,
  'general-apart-givekey': faBuilding,
  'general-ask-for-train': faTrain,
  'general-check-over-self': faUserCheck,
  'general-check-over-target': faDiagnoses,
  'general-check-vehicle': faWrench,
  'general-escort': faUserFriends,
  'general-put-in-veh': faSignInAlt,
  'general-unseat-nearest': faSignOutAlt,
  'general-flip-vehicle': faCarCrash,
  //   'general-wheelchair': FaI.faAccessibleIcon,
  'general-herodrenaline': faSyringe,
  'blips': faMapMarkedAlt,
  'blips-gasstations': faGasPump,
  'blips-trainstations': faTrain,
  'blips-garages': faParking,
  'blips-barbershop': faCut,
  'blips-tattooshop': faPenFancy,
  'blips-fishing': faFish,
  'blips-goldpan': faDrumSteelpan,
  'drivinginstructor': faTaxi,
  'drivinginstructor-drivingtest': faClipboardList,
  'drivinginstructor-submittest': faUpload,
  'judge-raid': faFlagUsa,
  'judge-raid-check-owner': faHome,
  'judge-raid-lock-down': faHandMiddleFinger,
  'judge-raid-forfeit': faFileInvoiceDollar,
  'cuffs': faHands,
  'cuffs-cuff': faUserLock,
  'cuffs-uncuff': faUnlink,
  'cuffs-remove-mask': faTheaterMasks,
  'cuffs-check-inventory': faMobileAlt,
  'cuffs-unseat-player': faSignOutAlt,
  'cuffs-check-phone': faMobileAlt,
  'cuffs-beatmode': faFistRaised,
  'blindfold': faLowVision,
  'gag': faVolumeMute,
  'gpsjam': faLocationArrow,
  'deafen': faDeaf,
  'medic': faBriefcaseMedical,
  'medic-revive': faSyringe,
  'medic-heal': faBandAid,
  'medic-stomachpump': faPumpMedical,
  'doctor': faUserMd,
  'police-action': faShieldAlt,
  'police-action-remove-weapons': faTrash,
  'police-action-gsr': faSearch,
  'police-action-dna-swab': faDna,
  'police-action-frisk': faSignLanguage,
  'police-action-fingerprint': faFingerprint,
  'police-check': faDatabase,
  'police-check-bank': faPiggyBank,
  'police-vehicle': faTruckPickup,
  'police-vehicle-plate': faMoneyCheck,
  'police-vehicle-radar': faBroadcastTower,
  'judge-actions': faBalanceScale,
  'judge-actions-toggle-cuff': faLink,
  'judge-actions-escort': faUserFriends,
  'judge-actions-check-bank': faSearchDollar,
  'meth-actions': faVials,
  'meth-enter-door': faDoorOpen,
  'meth-destroy-property': faBomb,
  'heroin-actions': faVials,
  'heroin-enter-door': faDoorOpen,
  'heroin-lock-door': faLock,
  'heroin-destroy-property': faBomb,
  'news': faNewspaper,
  'news-job-news-camera': faCamera,
  'news-job-news-microphone': faMicrophone,
  'news-job-news-boom': faBroom,
  'vehicle-options': faCar,
  'vehicle-options-vehicle': faCar,
  'weed-cultivation': faCannabis,
  'weed-cultivation-request-status': faQuestionCircle,
  'weed-cultivation-remove-a-crate': faMinusSquare,
  'cocaine-status': faVial,
  'cocaine-crate': faBox,
  'mdt': faTabletAlt,
  'property-enter': faDoorOpen,
  'property-lock': faLock,
  'expressions': faTheaterMasks,
  'expressions-angry': faAngry,
  'expressions-drunk': faBeer,
  'expressions-dumb': faGrinTongueSquint,
  'expressions-electrocuted': faBolt,
  'expressions-grumpy': faTired,
  'expressions-happy': faSmileBeam,
  'expressions-injured': faUserInjured,
  'expressions-joyful': faLaugh,
  'expressions-mouthbreather': faTeethOpen,
  'expressions-normal': faMehBlank,
  'expressions-oneeye': faLaughWink,
  'expressions-shocked': faBolt,
  'expressions-sleeping': faBed,
  'expressions-smug': faMehRollingEyes,
  'expressions-speculative': faLightbulb,
  'expressions-stressed': faFlushed,
  'expressions-sulking': faSadCry,
  'expressions-weird': faGrimace,
  'expressions-weird2': faGrimace,
  'obj-vending-machine': faStore,
  'obj-atm': faCreditCard,
  'obj-chair': faChair,
  'obj-door': faDoorOpen,
  'obj-trash': faTrashAlt,
  'obj-yoga': faPray,
  'obj-weights': faDumbbell,
  'obj-smoke': faSmog,
  'obj-gavel': faGavel,
  'obj-box': faBox,
  'obj-phone': faPhoneAlt,
  'vehicle-refuel': faGasPump,
  'vehicle-getintrunk': faUserSecret,
  'vehicle-parkvehicle': faParking,
  'vehicle-vehicleList': faWarehouse,
  'vehicle-garbage': faTrashRestoreAlt,
  'vehicle-impound': faLock,
  'vehicle-tow': faTrailer,
  'vehicle-vin': faSimCard,
  'vehicle-plate-remove': faBan,
  'vehicle-plate-add': faScrewdriver,
  'vehicle-anchor': faAnchor,
  'vehicle-flight-data': faSatelliteDish,
  'general-door-keyFob': faWifi,
  'poledance-toggle': faBoxTissue,
  'shoes': faShoePrints,
  'ped-give-stolen-items': faHandHolding,
  'ped-sell-stolen-items': faDonate,
  'ped-exchange-recycle': faRecycle,
  'ped-news-job': faSignInAlt,
  'ped-sign-out': faSignOutAlt,
  'ped-bank-account-manager': faMoneyCheckAlt,
  'ped-shop': faShoppingBasket,
  'ped-weapon-shop': faCrosshairs,
  'ped-tool-shop': faTools,
  'prison-action': faStreetView,
  'prisoner-collar': faLocationArrow,
  'prisoner-info': faUserClock,
  'prisoner-task': faListAlt,
  'prisoner-group': faUsers,
  'arcade-game-options': faGamepad,
  'arcade-game-end': faTimesCircle,
  'arcade-game-restart': faUndoAlt,
  'arcade-game-leave': faSignOutAlt,
  'arcade-airsoft-tdm-changeloadout': faShieldAlt,
  'arcade-vtag-flip': faRedo,
  'arcade-vtag-reset': faTrashRestore,
  'arcade-vtag-respawn': faRedo,
  'arcade-stop-spectating': faGlasses,
  'infected-icon': faBiohazard,
  'general-bite': faTeethOpen,
  'editor-open': faPenToSquare
};

const nuiAction = async (action, body = {}) => {
  const character = {};
  let requestBody = typeof body === "object" ? { character, ...body } : { character, body };
  const fetchResult = await fetch(
    `https://np-menu/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(requestBody)
    }
  );
  try {
    const result = await fetchResult.json();
    return result;
  } catch (err) {
    return { body: {}, meta: { ok: false, message: `failed to do request for: ${action} - ${err instanceof Error && err.message}` } };
  }
};

const _tmpl$ = /*#__PURE__*/template(`<svg><g class="icon-container" transform="translate(56, -12)"><path class="hover-ef-bg" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="#1A1D29" fill-opacity="1" stroke=""></path><path class="interaction-hover" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint0_radial_358_3992)" fill-opacity="0.85" stroke="#B800F8"></path><svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" x="50" y="41.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25958 0.088126C9.10897 0.142752 8.90087 0.248038 8.79715 0.322116C8.69338 0.396194 6.7336 2.37591 4.44202 4.72147C1.0525 8.19087 0.256331 9.02928 0.172585 9.21762C0.0200753 9.56025 -0.034954 9.94754 0.021925 10.2773C0.126018 10.8806 -0.0341676 10.6993 4.44202 15.281C6.7336 17.6265 8.69347 19.6063 8.79733 19.6805C9.31318 20.0489 9.9776 20.1022 10.5643 19.8222C10.8206 19.7 10.9795 19.5661 11.4792 19.0516C11.9156 18.6021 12.1192 18.3545 12.2109 18.1615C12.4387 17.6822 12.4479 17.1265 12.2366 16.6087C12.1433 16.3801 11.7854 15.997 9.02984 13.1763L5.928 10.0012L9.02984 6.82611C11.7854 4.00543 12.1433 3.6223 12.2366 3.39373C12.4477 2.87632 12.4387 2.32085 12.2113 1.84093C12.119 1.64613 11.9194 1.4042 11.4753 0.949018C10.9753 0.436657 10.8106 0.298037 10.558 0.17736C10.1405 -0.0221176 9.65561 -0.0554503 9.25958 0.088126ZM19.9957 0.0402043C19.4941 0.169569 19.5099 0.154745 15.1191 4.63507C11.3575 8.47349 10.8882 8.96847 10.7796 9.21228C10.5582 9.70935 10.5517 10.2467 10.7609 10.759C10.8548 10.9893 11.3091 11.4698 15.0783 15.3269C19.1098 19.4524 19.3055 19.645 19.6351 19.8121C19.9563 19.9751 20.0079 19.9869 20.4005 19.9869C20.7926 19.9869 20.8452 19.9749 21.167 19.8125C21.4568 19.6663 21.6063 19.5406 22.0948 19.0327C22.7177 18.385 22.8717 18.1454 22.9665 17.6772C23.0324 17.3516 23.002 17.0434 22.867 16.6661C22.7769 16.4146 22.5847 16.2078 19.6444 13.1999L16.5177 10.0012L19.6444 6.8025C22.5543 3.82569 22.7776 3.58575 22.8636 3.34411C22.9972 2.96872 23.03 2.63917 22.9655 2.32033C22.8718 1.85731 22.7161 1.61581 22.0948 0.969697C21.3852 0.231844 21.0762 0.0452562 20.5128 0.0142841C20.3239 0.00394433 20.0912 0.0156061 19.9957 0.0402043ZM20.867 0.855724C20.9411 0.895052 21.2637 1.20015 21.584 1.53371C22.1133 2.08493 22.1717 2.16288 22.2247 2.38931C22.2943 2.68586 22.2605 2.92037 22.111 3.17887C22.0509 3.28274 20.575 4.82303 18.8312 6.6017C15.8399 9.65279 15.6606 9.84509 15.6606 10.0012C15.6606 10.1574 15.8399 10.3497 18.8312 13.4007C20.575 15.1794 22.0509 16.7197 22.111 16.8236C22.2605 17.0821 22.2943 17.3166 22.2247 17.6131C22.1717 17.8396 22.1133 17.9175 21.584 18.4687C21.2637 18.8023 20.9433 19.1062 20.872 19.144C20.6832 19.2443 20.3388 19.2735 20.0999 19.2095C19.9088 19.1583 19.5509 18.8062 15.7152 14.8962C13.2067 12.339 11.5011 10.5649 11.4447 10.4542C11.3183 10.206 11.3183 9.79631 11.4447 9.54825C11.5011 9.43782 13.2064 7.66255 15.6946 5.12406C18.9329 1.82034 19.8907 0.869038 20.033 0.815026C20.2515 0.732119 20.6729 0.752704 20.867 0.855724Z" fill="white"></path></svg><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="75" text-anchor="middle" dy="14"><tspan>Previous</tspan><tspan x="60" y="104">Page</svg>`, false, true),
  _tmpl$2 = /*#__PURE__*/template(`<svg><g class="icon-container" transform="translate(168, -12)"><path class="hover-ef-bg" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="#1A1D29" fill-opacity="1" stroke=""></path><path class="interaction-hover" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint0_radial_358_396)" fill-opacity="0.85" stroke="#0090F8"></path><svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" x="50" y="41.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7404 0.088126C13.891 0.142752 14.0991 0.248038 14.2029 0.322116C14.3066 0.396194 16.2664 2.37591 18.558 4.72147C21.9475 8.19087 22.7437 9.02928 22.8274 9.21762C22.9799 9.56025 23.035 9.94754 22.9781 10.2773C22.874 10.8806 23.0342 10.6993 18.558 15.281C16.2664 17.6265 14.3065 19.6063 14.2027 19.6805C13.6868 20.0489 13.0224 20.1022 12.4357 19.8222C12.1794 19.7 12.0205 19.5661 11.5208 19.0516C11.0844 18.6021 10.8808 18.3545 10.7891 18.1615C10.5613 17.6822 10.5521 17.1265 10.7634 16.6087C10.8567 16.3801 11.2146 15.997 13.9702 13.1763L17.072 10.0012L13.9702 6.82611C11.2146 4.00543 10.8567 3.6223 10.7634 3.39373C10.5523 2.87632 10.5613 2.32085 10.7887 1.84093C10.881 1.64613 11.0806 1.4042 11.5247 0.949018C12.0247 0.436657 12.1894 0.298037 12.442 0.17736C12.8595 -0.0221176 13.3444 -0.0554503 13.7404 0.088126ZM3.0043 0.0402043C3.50591 0.169569 3.49014 0.154745 7.88087 4.63507C11.6425 8.47349 12.1118 8.96847 12.2204 9.21228C12.4418 9.70935 12.4483 10.2467 12.2391 10.759C12.1452 10.9893 11.6909 11.4698 7.9217 15.3269C3.89018 19.4524 3.69453 19.645 3.36491 19.8121C3.0437 19.9751 2.9921 19.9869 2.59949 19.9869C2.2074 19.9869 2.15482 19.9749 1.83301 19.8125C1.54316 19.6663 1.39366 19.5406 0.905241 19.0327C0.282347 18.385 0.128263 18.1454 0.0335121 17.6772C-0.0323849 17.3516 -0.00204849 17.0434 0.13298 16.6661C0.223063 16.4146 0.415295 16.2078 3.35557 13.1999L6.48234 10.0012L3.35557 6.8025C0.445723 3.82569 0.222368 3.58575 0.136356 3.34411C0.00275993 2.96872 -0.0300255 2.63917 0.034483 2.32033C0.128172 1.85731 0.283873 1.61581 0.905241 0.969697C1.61484 0.231844 1.92379 0.0452562 2.48717 0.0142841C2.67612 0.00394433 2.90881 0.0156061 3.0043 0.0402043ZM2.13299 0.855724C2.05891 0.895052 1.73627 1.20015 1.41599 1.53371C0.886698 2.08493 0.828339 2.16288 0.775251 2.38931C0.705702 2.68586 0.739504 2.92037 0.889008 3.17887C0.949078 3.28274 2.42502 4.82303 4.1688 6.6017C7.16008 9.65279 7.33941 9.84509 7.33941 10.0012C7.33941 10.1574 7.16008 10.3497 4.1688 13.4007C2.42502 15.1794 0.949078 16.7197 0.889008 16.8236C0.739504 17.0821 0.705702 17.3166 0.775251 17.6131C0.828339 17.8396 0.886698 17.9175 1.41599 18.4687C1.73627 18.8023 2.05669 19.1062 2.128 19.144C2.31676 19.2443 2.66123 19.2735 2.90007 19.2095C3.0912 19.1583 3.44912 18.8062 7.2848 14.8962C9.79325 12.339 11.4989 10.5649 11.5553 10.4542C11.6817 10.206 11.6817 9.79631 11.5553 9.54825C11.4989 9.43782 9.79358 7.66255 7.30542 5.12406C4.06711 1.82034 3.10932 0.869038 2.96703 0.815026C2.74854 0.732119 2.32708 0.752704 2.13299 0.855724Z" fill="white"></path></svg><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="75" text-anchor="middle" dy="14"><tspan>Next</tspan><tspan x="60" y="104">Page</svg>`, false, true),
  _tmpl$3 = /*#__PURE__*/template(`<div><svg width="255" height="50" viewBox="0 0 424 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="item"><defs><radialGradient id="paint0_radial_358_3992" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(45) scale(115.023)"><stop stop-color="#B800F8"></stop><stop offset="1" stop-color="#B800F8" stop-opacity="0"></stop></radialGradient><radialGradient id="paint0_radial_358_396" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(45) scale(115.023)"><stop stop-color="#0090F8"></stop><stop offset="1" stop-color="#0090F8" stop-opacity="0"></stop></radialGradient><radialGradient id="paint0_radial_358_402" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(45) scale(115.023)"><stop stop-color="#F80000"></stop><stop offset="1" stop-color="#F80000" stop-opacity="0"></stop></radialGradient></defs></svg><svg width="255" height="50" viewBox="0 0 424 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="item"><g class="icon-container" transform="translate(112, -16)"><path class="hover-ef-bg" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="#1A1D29" fill-opacity="1" stroke=""></path><path class="interaction-hover" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint0_radial_358_402)" fill-opacity="0.85" stroke="#F80000"></path><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" x="50" y="48.5"></svg><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="85" text-anchor="middle" dy="14"><tspan>`),
  _tmpl$4 = /*#__PURE__*/template(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M1.14988 1.16953L0.000155947 2.31972L3.84014 6.15986L7.68012 10L3.84006 13.8402L0 17.6804L1.15978 18.8402L2.31957 20L6.15978 16.1599L10 12.3199L13.8402 16.1599L17.6804 20L18.8402 18.8402L20 17.6804L16.1599 13.8402L12.3199 10L16.1599 6.15978L20 2.31957L18.8402 1.15978L17.6804 0L13.8402 3.84006L10 7.68012L6.16945 3.84973C4.06268 1.74303 2.33006 0.0193375 2.31926 0.0193375C2.30842 0.0193375 1.78221 0.536929 1.14988 1.16953Z" fill="white"></svg>`, false, true),
  _tmpl$5 = /*#__PURE__*/template(`<svg><path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-6.662l3.474-4.298l-3.11-2.515L10.577,12l7.125,8.813l3.11-2.515L17.338,14H24c5.514,0,10,4.486,10,10s-4.486,10-10,10s-10-4.486-10-10v-2H10z" fill="white" style="transform:translate(-5px, -3px) scale(0.6);"></svg>`, false, true),
  _tmpl$6 = /*#__PURE__*/template(`<svg width="255" height="150" viewBox="0 0 424 150" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="paint0_radial_357_379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53 61) rotate(90) scale(69.3593 39.0146)"><stop stop-color="#1A1D29" stop-opacity="0.92"></stop><stop offset="1" stop-color="#222530"></stop></radialGradient><radialGradient id="paint1_radial_357_379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48 61) rotate(55.8786) scale(110.527 1790.87)"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></radialGradient><radialGradient id="paint0_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.5 7.5) rotate(90) scale(58.5)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_87_2" x1="60.5" y1="0" x2="60.5" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></linearGradient><radialGradient id="paint2_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.5 142.5) rotate(-90) scale(58.5)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint3_linear_87_2" x1="60.5" y1="150" x2="60.5" y2="111" gradientUnits="userSpaceOnUse"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="1"></stop></linearGradient><radialGradient id="paint4_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61 75) rotate(45) scale(115.023)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0">`),
  _tmpl$7 = /*#__PURE__*/template(`<svg><g class="icon-container"><path class="hover-child-t" d="M63.25 2.16506L91.458 18.451C93.1597 19.4334 94.208 21.2491 94.208 23.2141V55.7859C94.208 57.7509 93.1597 59.5666 91.458 60.549L63.25 76.8349C61.5483 77.8174 59.4517 77.8174 57.75 76.8349L29.542 60.549C27.8403 59.5666 26.792 57.7509 26.792 55.7859V23.2141C26.792 21.2491 27.8403 19.4334 29.542 18.451L57.75 2.16506C59.4517 1.18258 61.5483 1.18258 63.25 2.16506Z" fill="url(#paint0_radial_87_2)" fill-opacity="0.85" stroke="url(#paint1_linear_87_2)"></path><path class="hover-child-b" d="M63.25 147.835L91.458 131.549C93.1597 130.567 94.208 128.751 94.208 126.786V94.2141C94.208 92.2491 93.1597 90.4334 91.458 89.451L63.25 73.1651C61.5483 72.1826 59.4517 72.1826 57.75 73.1651L29.542 89.451C27.8403 90.4334 26.792 92.2491 26.792 94.2141V126.786C26.792 128.751 27.8403 130.567 29.542 131.549L57.75 147.835C59.4517 148.817 61.5483 148.817 63.25 147.835Z" fill="url(#paint2_radial_87_2)" fill-opacity="0.85" stroke="url(#paint3_linear_87_2)"></path><path class="hover-ef-bg" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="#1A1D29" fill-opacity="1" stroke=""></path><path class="hover-ef" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint4_radial_87_2)" fill-opacity="0.85" stroke="#00F8B9"></path><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="84" text-anchor="middle"></svg>`, false, true),
  _tmpl$8 = /*#__PURE__*/template(`<svg><tspan x="60" dy="14"></svg>`, false, true),
  _tmpl$9 = /*#__PURE__*/template(`<svg><g class="icon-container more" transform="translate(176, 0)"><path class="interaction-hover" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint0_radial_358_396)" fill-opacity="0.85" stroke="#0090F8"></path><svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" x="50" y="41.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7404 0.088126C13.891 0.142752 14.0991 0.248038 14.2029 0.322116C14.3066 0.396194 16.2664 2.37591 18.558 4.72147C21.9475 8.19087 22.7437 9.02928 22.8274 9.21762C22.9799 9.56025 23.035 9.94754 22.9781 10.2773C22.874 10.8806 23.0342 10.6993 18.558 15.281C16.2664 17.6265 14.3065 19.6063 14.2027 19.6805C13.6868 20.0489 13.0224 20.1022 12.4357 19.8222C12.1794 19.7 12.0205 19.5661 11.5208 19.0516C11.0844 18.6021 10.8808 18.3545 10.7891 18.1615C10.5613 17.6822 10.5521 17.1265 10.7634 16.6087C10.8567 16.3801 11.2146 15.997 13.9702 13.1763L17.072 10.0012L13.9702 6.82611C11.2146 4.00543 10.8567 3.6223 10.7634 3.39373C10.5523 2.87632 10.5613 2.32085 10.7887 1.84093C10.881 1.64613 11.0806 1.4042 11.5247 0.949018C12.0247 0.436657 12.1894 0.298037 12.442 0.17736C12.8595 -0.0221176 13.3444 -0.0554503 13.7404 0.088126ZM3.0043 0.0402043C3.50591 0.169569 3.49014 0.154745 7.88087 4.63507C11.6425 8.47349 12.1118 8.96847 12.2204 9.21228C12.4418 9.70935 12.4483 10.2467 12.2391 10.759C12.1452 10.9893 11.6909 11.4698 7.9217 15.3269C3.89018 19.4524 3.69453 19.645 3.36491 19.8121C3.0437 19.9751 2.9921 19.9869 2.59949 19.9869C2.2074 19.9869 2.15482 19.9749 1.83301 19.8125C1.54316 19.6663 1.39366 19.5406 0.905241 19.0327C0.282347 18.385 0.128263 18.1454 0.0335121 17.6772C-0.0323849 17.3516 -0.00204849 17.0434 0.13298 16.6661C0.223063 16.4146 0.415295 16.2078 3.35557 13.1999L6.48234 10.0012L3.35557 6.8025C0.445723 3.82569 0.222368 3.58575 0.136356 3.34411C0.00275993 2.96872 -0.0300255 2.63917 0.034483 2.32033C0.128172 1.85731 0.283873 1.61581 0.905241 0.969697C1.61484 0.231844 1.92379 0.0452562 2.48717 0.0142841C2.67612 0.00394433 2.90881 0.0156061 3.0043 0.0402043ZM2.13299 0.855724C2.05891 0.895052 1.73627 1.20015 1.41599 1.53371C0.886698 2.08493 0.828339 2.16288 0.775251 2.38931C0.705702 2.68586 0.739504 2.92037 0.889008 3.17887C0.949078 3.28274 2.42502 4.82303 4.1688 6.6017C7.16008 9.65279 7.33941 9.84509 7.33941 10.0012C7.33941 10.1574 7.16008 10.3497 4.1688 13.4007C2.42502 15.1794 0.949078 16.7197 0.889008 16.8236C0.739504 17.0821 0.705702 17.3166 0.775251 17.6131C0.828339 17.8396 0.886698 17.9175 1.41599 18.4687C1.73627 18.8023 2.05669 19.1062 2.128 19.144C2.31676 19.2443 2.66123 19.2735 2.90007 19.2095C3.0912 19.1583 3.44912 18.8062 7.2848 14.8962C9.79325 12.339 11.4989 10.5649 11.5553 10.4542C11.6817 10.206 11.6817 9.79631 11.5553 9.54825C11.4989 9.43782 9.79358 7.66255 7.30542 5.12406C4.06711 1.82034 3.10932 0.869038 2.96703 0.815026C2.74854 0.732119 2.32708 0.752704 2.13299 0.855724Z" fill="white"></path></svg><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="75" text-anchor="middle" dy="14"><tspan>Next</tspan><tspan x="60" y="104">Page</svg>`, false, true),
  _tmpl$10 = /*#__PURE__*/template(`<svg><g class="icon-container prev" transform="translate(58, 0)"><path class="interaction-hover" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint0_radial_358_3992)" fill-opacity="0.85" stroke="#B800F8"></path><svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" x="50" y="41.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25958 0.088126C9.10897 0.142752 8.90087 0.248038 8.79715 0.322116C8.69338 0.396194 6.7336 2.37591 4.44202 4.72147C1.0525 8.19087 0.256331 9.02928 0.172585 9.21762C0.0200753 9.56025 -0.034954 9.94754 0.021925 10.2773C0.126018 10.8806 -0.0341676 10.6993 4.44202 15.281C6.7336 17.6265 8.69347 19.6063 8.79733 19.6805C9.31318 20.0489 9.9776 20.1022 10.5643 19.8222C10.8206 19.7 10.9795 19.5661 11.4792 19.0516C11.9156 18.6021 12.1192 18.3545 12.2109 18.1615C12.4387 17.6822 12.4479 17.1265 12.2366 16.6087C12.1433 16.3801 11.7854 15.997 9.02984 13.1763L5.928 10.0012L9.02984 6.82611C11.7854 4.00543 12.1433 3.6223 12.2366 3.39373C12.4477 2.87632 12.4387 2.32085 12.2113 1.84093C12.119 1.64613 11.9194 1.4042 11.4753 0.949018C10.9753 0.436657 10.8106 0.298037 10.558 0.17736C10.1405 -0.0221176 9.65561 -0.0554503 9.25958 0.088126ZM19.9957 0.0402043C19.4941 0.169569 19.5099 0.154745 15.1191 4.63507C11.3575 8.47349 10.8882 8.96847 10.7796 9.21228C10.5582 9.70935 10.5517 10.2467 10.7609 10.759C10.8548 10.9893 11.3091 11.4698 15.0783 15.3269C19.1098 19.4524 19.3055 19.645 19.6351 19.8121C19.9563 19.9751 20.0079 19.9869 20.4005 19.9869C20.7926 19.9869 20.8452 19.9749 21.167 19.8125C21.4568 19.6663 21.6063 19.5406 22.0948 19.0327C22.7177 18.385 22.8717 18.1454 22.9665 17.6772C23.0324 17.3516 23.002 17.0434 22.867 16.6661C22.7769 16.4146 22.5847 16.2078 19.6444 13.1999L16.5177 10.0012L19.6444 6.8025C22.5543 3.82569 22.7776 3.58575 22.8636 3.34411C22.9972 2.96872 23.03 2.63917 22.9655 2.32033C22.8718 1.85731 22.7161 1.61581 22.0948 0.969697C21.3852 0.231844 21.0762 0.0452562 20.5128 0.0142841C20.3239 0.00394433 20.0912 0.0156061 19.9957 0.0402043ZM20.867 0.855724C20.9411 0.895052 21.2637 1.20015 21.584 1.53371C22.1133 2.08493 22.1717 2.16288 22.2247 2.38931C22.2943 2.68586 22.2605 2.92037 22.111 3.17887C22.0509 3.28274 20.575 4.82303 18.8312 6.6017C15.8399 9.65279 15.6606 9.84509 15.6606 10.0012C15.6606 10.1574 15.8399 10.3497 18.8312 13.4007C20.575 15.1794 22.0509 16.7197 22.111 16.8236C22.2605 17.0821 22.2943 17.3166 22.2247 17.6131C22.1717 17.8396 22.1133 17.9175 21.584 18.4687C21.2637 18.8023 20.9433 19.1062 20.872 19.144C20.6832 19.2443 20.3388 19.2735 20.0999 19.2095C19.9088 19.1583 19.5509 18.8062 15.7152 14.8962C13.2067 12.339 11.5011 10.5649 11.4447 10.4542C11.3183 10.206 11.3183 9.79631 11.4447 9.54825C11.5011 9.43782 13.2064 7.66255 15.6946 5.12406C18.9329 1.82034 19.8907 0.869038 20.033 0.815026C20.2515 0.732119 20.6729 0.752704 20.867 0.855724Z" fill="white"></path></svg><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="75" text-anchor="middle" dy="14"><tspan>Previous</tspan><tspan x="60" y="104">Page</svg>`, false, true),
  _tmpl$11 = /*#__PURE__*/template(`<svg><g><path class="hover-child-t" d="M63.25 2.16506L91.458 18.451C93.1597 19.4334 94.208 21.2491 94.208 23.2141V55.7859C94.208 57.7509 93.1597 59.5666 91.458 60.549L63.25 76.8349C61.5483 77.8174 59.4517 77.8174 57.75 76.8349L29.542 60.549C27.8403 59.5666 26.792 57.7509 26.792 55.7859V23.2141C26.792 21.2491 27.8403 19.4334 29.542 18.451L57.75 2.16506C59.4517 1.18258 61.5483 1.18258 63.25 2.16506Z" fill="url(#paint0_radial_87_2)" fill-opacity="0.85" stroke="url(#paint1_linear_87_2)"></path><path class="hover-child-b" d="M63.25 147.835L91.458 131.549C93.1597 130.567 94.208 128.751 94.208 126.786V94.2141C94.208 92.2491 93.1597 90.4334 91.458 89.451L63.25 73.1651C61.5483 72.1826 59.4517 72.1826 57.75 73.1651L29.542 89.451C27.8403 90.4334 26.792 92.2491 26.792 94.2141V126.786C26.792 128.751 27.8403 130.567 29.542 131.549L57.75 147.835C59.4517 148.817 61.5483 148.817 63.25 147.835Z" fill="url(#paint2_radial_87_2)" fill-opacity="0.85" stroke="url(#paint3_linear_87_2)"></path><path class="hover-ef-bg" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="#1A1D29" fill-opacity="1" stroke=""></path><path class="hover-ef" d="M63.75 16.1651L110.578 43.201C112.279 44.1834 113.328 45.9991 113.328 47.9641V102.036C113.328 104.001 112.279 105.817 110.578 106.799L63.75 133.835C62.0483 134.817 59.9517 134.817 58.25 133.835L11.4224 106.799C9.72074 105.817 8.67245 104.001 8.67245 102.036V47.9641C8.67245 45.9991 9.72075 44.1834 11.4225 43.201L58.25 16.1651C59.9517 15.1826 62.0483 15.1826 63.75 16.1651Z" fill="url(#paint4_radial_87_2)" fill-opacity="0.85" stroke="#00F8B9"></path><text fill="#ffffff8c" font-family="gilroy400" font-size="14" x="60" y="84" text-anchor="middle"></svg>`, false, true),
  _tmpl$12 = /*#__PURE__*/template(`<svg width="488" height="282" viewBox="0 15 530 282" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_93_35)"><path d="M239.5 174.732C241.356 173.66 243.644 173.66 245.5 174.732L304.019 208.518C305.875 209.59 307.019 211.571 307.019 213.714V281.286C307.019 283.429 305.875 285.41 304.019 286.482L245.5 320.268C243.644 321.34 241.356 321.34 239.5 320.268L180.981 286.482C179.125 285.41 177.981 283.429 177.981 281.286V213.714C177.981 211.571 179.125 209.59 180.981 208.518L239.5 174.732Z" fill="url(#paint0_radial_93_35)" fill-opacity="0.15"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M241.109 217.13C229.211 217.973 217.79 224.541 208.784 235.719C207.317 237.54 207 238.125 207 239.018C207 239.915 207.324 240.513 208.794 242.323C211.743 245.956 214.98 249.167 218.346 251.8C222.897 255.359 229.012 258.423 234.25 259.77C242.457 261.879 251.155 261.263 258.998 258.017C266.53 254.899 273.338 249.612 279.216 242.317C280.683 240.497 281 239.911 281 239.018C281 238.121 280.676 237.523 279.206 235.713C273.911 229.19 268.188 224.474 261.705 221.292C256.543 218.758 251.992 217.501 246.602 217.122C244.271 216.957 243.529 216.959 241.109 217.13ZM247.783 224.008C250.615 224.761 252.831 226.039 254.925 228.126C257.024 230.219 258.307 232.433 259.046 235.238C259.472 236.854 259.578 240.114 259.259 241.801C258.067 248.103 253.115 253.042 246.8 254.229C245.088 254.551 241.821 254.451 240.217 254.027C237.393 253.28 235.17 251.999 233.075 249.91C230.976 247.818 229.693 245.604 228.954 242.798C228.528 241.182 228.422 237.923 228.741 236.235C229.912 230.046 234.603 225.244 240.82 223.873C242.503 223.502 246.144 223.572 247.783 224.008ZM241.977 230.888C238.971 231.676 236.61 234.079 235.82 237.155C235.505 238.38 235.61 240.465 236.049 241.716C236.909 244.166 239.017 246.217 241.465 246.985C243.004 247.467 245.441 247.433 246.775 246.91C249.27 245.93 251.102 244.079 251.969 241.658C252.396 240.465 252.492 238.238 252.169 237.001C251.391 234.022 248.919 231.566 246.009 230.882C244.855 230.611 243.022 230.614 241.977 230.888Z" fill="url(#paint1_radial_93_35)" fill-opacity="0.55"></path></g><defs><radialGradient id="paint0_radial_358_3992" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(45) scale(115.023)"><stop stop-color="#B800F8"></stop><stop offset="1" stop-color="#B800F8" stop-opacity="0"></stop></radialGradient><radialGradient id="paint0_radial_358_396" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(45) scale(115.023)"><stop stop-color="#0090F8"></stop><stop offset="1" stop-color="#0090F8" stop-opacity="0"></stop></radialGradient><radialGradient id="paint0_radial_357_379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53 61) rotate(90) scale(69.3593 39.0146)"><stop stop-color="#1A1D29" stop-opacity="0.92"></stop><stop offset="1" stop-color="#222530"></stop></radialGradient><radialGradient id="paint1_radial_357_379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48 61) rotate(55.8786) scale(110.527 1790.87)"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></radialGradient><radialGradient id="paint0_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.5 7.5) rotate(90) scale(58.5)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_87_2" x1="60.5" y1="0" x2="60.5" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></linearGradient><radialGradient id="paint2_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.5 142.5) rotate(-90) scale(58.5)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint3_linear_87_2" x1="60.5" y1="150" x2="60.5" y2="111" gradientUnits="userSpaceOnUse"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="1"></stop></linearGradient><radialGradient id="paint4_radial_87_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61 75) rotate(45) scale(115.023)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><radialGradient id="paint0_radial_93_35" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(242.097 173) rotate(90) scale(118.467)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><radialGradient id="paint1_radial_93_35" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(244 239) rotate(30.7355) scale(57.3953 50.4261)"><stop stop-color="#00F8B9"></stop><stop offset="1" stop-color="#00F8B9" stop-opacity="0"></stop></radialGradient><clipPath id="clip0_93_35"><rect width="488" height="282" fill="white">`),
  _tmpl$13 = /*#__PURE__*/template(`<div class="wrapper-small-menu"><div class="content center">`),
  _tmpl$14 = /*#__PURE__*/template(`<div><div>`);
const interfaceView = props => {
  const [pageItemsF, setPageItemsF] = createSignal([]);
  const [gridTh, setGridTh] = createSignal(0);
  const cutString = (str, maxLength = 10) => {
    const words = str.split(' ');
    const lines = [];
    let currentLine = words[0];
    for (let word of words.slice(1)) {
      if ((currentLine + ' ' + word).length <= maxLength) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };
  let menuKeybind = "";
  let menuStack = {
    normal: [],
    small: []
  };
  const [page, setPage] = createSignal(1);
  const [showMenu, setShowMenu] = createSignal(false);
  const [fullMenu, setFullMenu] = createSignal([]);
  const [hidePrev, setHidePrev] = createSignal(true);
  const [hideNext, setHideNext] = createSignal(true);
  const [renderList, setRenderList] = createSignal([]);
  const [smallRenderList, setSmallRenderList] = createSignal([]);
  const [normalRenderList, setNormalRenderList] = createSignal([]);
  const [currentEntity, setCurrentEntity] = createSignal();
  const [entityContext, setEntityContext] = createSignal();
  const [activeSmall, setActiveSmall] = createSignal();
  const [isTopLevel, setIsTopLevel] = createSignal(true);
  const [isSmallMenu, setIsSmallMenu] = createSignal(false);
  const navigationCheck = (type = "default") => {
    const currentItems = type === "default" ? normalRenderList() : smallRenderList();
    const childWithMore = currentItems.find(item => item.id === "_more");
    setHideNext(!childWithMore);
    if (type === "small") {
      setHidePrev(menuStack.small.length === 0);
    } else {
      setHidePrev(menuStack.normal.length === 0);
    }
  };
  const closeMenu = async () => {
    setShowMenu(false);
    const result = await nuiAction("closemenu", {
      withNoFocus: false
    }).then(result => {});
    return result;
  };
  const resetMenuDefaults = (type = "all") => {
    switch (type) {
      case "all":
        setFullMenu([]);
        setHidePrev(true);
        setHideNext(true);
        setActiveSmall(null);
        setSmallRenderList([]);
        setNormalRenderList([]);
        setIsSmallMenu(false);
        menuStack = {
          normal: [],
          small: []
        };
        break;
      case "normal":
        setNormalRenderList([]);
        setHidePrev(true);
        setHideNext(true);
        setActiveSmall(null);
        menuStack.normal = [];
        break;
      case "small":
        setSmallRenderList([]);
        setActiveSmall(null);
        menuStack.small = [];
        break;
    }
  };
  const setRenderListFromItems = (items, smallMenu) => {
    const processPageListItems = menuItems => menuItems.map(i => {
      let icon = i.icon;
      if (typeof i.icon === 'string' && i.icon.startsWith("#")) {
        const iconId = i.icon.replace("#", "");
        icon = iconMap[iconId] || i.icon;
      }
      const childItems = i.items ? i.items.map(child => {
        let childIcon = child.icon;
        if (typeof child.icon === 'string' && child.icon.startsWith("#")) {
          const childIconId = child.icon.replace("#", "");
          childIcon = iconMap[childIconId] || child.icon;
        }
        return {
          ...child,
          icon: childIcon
        };
      }) : null;
      return {
        ...i,
        icon,
        items: childItems
      };
    });
    if (smallMenu && smallMenu.length) {
      let mainPageListItems, otherItems;
      const processedSmallMenu = processPageListItems(smallMenu);
      const vehiclesItemIndex = processedSmallMenu.filter(i => i.id.startsWith("vehicles"));
      if (vehiclesItemIndex?.length) {
        mainPageListItems = processedSmallMenu.filter(i => i.id.startsWith("vehicles"));
        otherItems = processedSmallMenu.filter(i => !i.id.startsWith("vehicles"));
      } else {
        if (processedSmallMenu?.length > 5) {
          mainPageListItems = processedSmallMenu.slice(0, 4);
          otherItems = processedSmallMenu.slice(4);
        }
      }
      if (otherItems?.length > 0) {
        mainPageListItems.push({
          id: "_more",
          items: otherItems,
          title: "More",
          icon: "#more"
        });
      }
      setSmallRenderList(mainPageListItems && mainPageListItems.length > 1 ? mainPageListItems : processedSmallMenu);
    }
    if (items && items.length) {
      const processedMenu = processPageListItems(items);
      setNormalRenderList(processedMenu);
    }
    navigationCheck();
  };
  const triggerAction = item => {
    nuiAction("triggerAction", {
      action: item.event,
      parameters: item.parameters,
      entity: currentEntity(),
      context: entityContext()
    });
  };
  const returnToTop = () => {
    setRenderListFromItems(fullMenu().items, smallRenderList());
    menuStack = {
      normal: [],
      small: []
    };
  };
  const handleNext = (all, type) => {
    const nextPage = all.find(item => item.id === "_more");
    if (nextPage?.items) {
      if (type === "small") {
        nextPage.items.unshift({
          id: "_prev",
          title: "Prev",
          icon: "#prev"
        });
        resetMenuDefaults("normal");
        setActiveSmall(null);
        menuStack.small.push(smallRenderList());
        nextPage.items = Array.from({
          length: 5
        }, (v, i) => {
          const item = nextPage.items?.[i];
          if (!item) {
            return {
              id: "_empty",
              title: "Empty",
              icon: "#empty"
            };
          }
          return item;
        });
        setRenderListFromItems(normalRenderList(), nextPage.items);
      } else {
        menuStack.normal.push(normalRenderList());
        setRenderListFromItems(nextPage.items, smallRenderList());
      }
    }
  };
  const handlePrev = (type = "default") => {
    if (type === "small") {
      resetMenuDefaults("normal");
      setActiveSmall(null);
      setRenderListFromItems(normalRenderList(), fullMenu().smallMenu);
    } else if (type === "default" && menuStack.normal.length) {
      const previousNormalRenderList = menuStack.normal.pop();
      if (previousNormalRenderList) {
        setRenderListFromItems(previousNormalRenderList, smallRenderList());
      }
    } else {
      setRenderListFromItems(fullMenu().items, fullMenu().smallMenu);
    }
  };
  const handleDefault = (all, type) => {
    if (all.items) {
      if (type === "small") {
        setRenderListFromItems(all.items, smallRenderList());
      } else {
        setRenderListFromItems(all.items, fullMenu().smallMenu);
      }
    } else {
      triggerAction(all);
    }
  };
  const handleExit = () => {
    if (smallRenderList() && smallRenderList().length > 1 && normalRenderList() && normalRenderList().length > 1) {
      resetMenuDefaults("normal");
      setActiveSmall(null);
    } else {
      closeMenu();
    }
  };
  const handleBack = () => {
    returnToTop();
  };
  const actionItem = (all, action = "default", type = "default") => {
    switch (action) {
      case "exit":
        handleExit();
        break;
      case "back":
        handleBack();
        break;
      case "next":
        handleNext(all, type);
        break;
      case "prev":
        handlePrev(type);
        break;
      default:
        handleDefault(all[0], type);
    }
  };
  const onMessage = async event => {
    let eventData = event.data;
    if (eventData.state === "destroy" && showMenu()) {
      await closeMenu();
    }
    resetMenuDefaults();
    menuKeybind = eventData.menuKeyBind;
    eventData.resourceName;
    setCurrentEntity(eventData.entity);
    setEntityContext(eventData.context);
    if (eventData.state === "show") {
      setShowMenu(true);
      const items = eventData.menuType === "default" ? eventData.data : {};
      const smallMenu = eventData.menuType === "small" ? eventData.data : {};
      setFullMenu({
        items,
        smallMenu
      });
      setRenderListFromItems(items, smallMenu);
    }
  };
  const onKeyUp = event => {
    switch (event.key) {
      case menuKeybind:
        if (showMenu()) {
          closeMenu();
        }
        break;
      case 'Escape':
        if (showMenu()) {
          closeMenu();
        }
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        // go to next page
        if (showMenu()) {
          actionItem(renderList(), 'next');
        }
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        // go to previous page
        if (showMenu()) {
          actionItem(renderList(), 'prev');
        }
        break;
    }
  };
  function onWheelScroll(event) {
    if (!showMenu()) return;
    const isSmallMenuActive = smallRenderList()?.length && !normalRenderList()?.length;
    const targetRenderList = isSmallMenuActive ? smallRenderList() : normalRenderList();
    let actionType = event.deltaY > 0 ? 'next' : 'prev';
    if (actionType === 'prev' && !isSmallMenuActive && menuStack.normal.length <= 1) {
      return;
    }
    actionItem(targetRenderList, actionType, isSmallMenuActive ? "small" : "default");
  }
  const onBlur = () => {
    if (showMenu()) {
      closeMenu();
    }
  };
  onMount(async () => {
    window.addEventListener('message', onMessage);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('wheel', onWheelScroll);
    window.addEventListener('blur', onBlur);
  });
  onCleanup(() => {
    window.removeEventListener('message', onMessage);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('wheel', onWheelScroll);
    window.removeEventListener('blur', onBlur);
  });
  const InterfaceInteractionItems = () => {
    return (() => {
      const _el$ = _tmpl$3(),
        _el$2 = _el$.firstChild,
        _el$5 = _el$2.firstChild,
        _el$6 = _el$2.nextSibling,
        _el$7 = _el$6.firstChild,
        _el$8 = _el$7.firstChild,
        _el$9 = _el$8.nextSibling,
        _el$10 = _el$9.nextSibling,
        _el$11 = _el$10.nextSibling,
        _el$12 = _el$11.firstChild;
      insert(_el$2, createComponent(Show, {
        get when() {
          return !hidePrev();
        },
        get children() {
          const _el$3 = _tmpl$();
          _el$3.$$click = () => actionItem(normalRenderList(), "prev");
          return _el$3;
        }
      }), _el$5);
      insert(_el$2, createComponent(Show, {
        get when() {
          return !hideNext();
        },
        get children() {
          const _el$4 = _tmpl$2();
          _el$4.$$click = () => actionItem(normalRenderList(), "next");
          return _el$4;
        }
      }), _el$5);
      _el$7.$$click = () => isTopLevel() ? actionItem([], "exit") : actionItem([], "back");
      insert(_el$10, (() => {
        const _c$ = createMemo(() => !!(isTopLevel() && !activeSmall()));
        return () => _c$() ? _tmpl$4() : _tmpl$5();
      })());
      insert(_el$12, () => isTopLevel() && !activeSmall() ? "Exit" : "Back");
      createRenderEffect(() => className(_el$, `interaction-content v-${pageItemsF().length}`));
      return _el$;
    })();
  };
  const Row = props => {
    return (() => {
      const _el$15 = _tmpl$6(),
        _el$16 = _el$15.firstChild;
      insert(_el$15, createComponent(For, {
        get each() {
          return props.rowItems;
        },
        children: (item, itemI) => (() => {
          const _el$17 = _tmpl$7(),
            _el$18 = _el$17.firstChild,
            _el$19 = _el$18.nextSibling,
            _el$20 = _el$19.nextSibling,
            _el$21 = _el$20.nextSibling,
            _el$22 = _el$21.nextSibling;
          _el$17.$$click = () => actionItem(item ? [item] : []);
          insert(_el$17, createComponent(Fa, {
            translateX: -1,
            translateY: -0.100,
            scale: 0.25,
            get icon() {
              return item?.icon;
            }
          }), _el$22);
          insert(_el$22, createComponent(For, {
            get each() {
              return cutString(item?.title);
            },
            children: str => (() => {
              const _el$23 = _tmpl$8();
              insert(_el$23, str);
              return _el$23;
            })()
          }));
          createRenderEffect(() => setAttribute(_el$17, "transform", `translate(${itemI() * 112}, 0)`));
          return _el$17;
        })()
      }), _el$16);
      createRenderEffect(() => setAttribute(_el$15, "class", `item v-${pageItemsF()[1].length} g-${gridTh()}`));
      return _el$15;
    })();
  };
  const SmallMenuRow = props => {
    const item = props.rowItem;
    return item.id === "_more" ? (() => {
      const _el$24 = _tmpl$9();
      _el$24.$$click = () => actionItem(smallRenderList(), "next", "small");
      return _el$24;
    })() : item.id === "_prev" ? (() => {
      const _el$25 = _tmpl$10();
      _el$25.$$click = () => actionItem(smallRenderList(), "prev", "small");
      return _el$25;
    })() : item.id !== "_empty" && (() => {
      const _el$26 = _tmpl$11(),
        _el$27 = _el$26.firstChild,
        _el$28 = _el$27.nextSibling,
        _el$29 = _el$28.nextSibling,
        _el$30 = _el$29.nextSibling,
        _el$31 = _el$30.nextSibling;
      _el$26.$$click = () => {
        actionItem(item ? [item] : [], "default", "small");
        activeSmall() === item.id ? resetMenuDefaults("normal") : setActiveSmall(item?.id);
      };
      insert(_el$26, createComponent(Fa, {
        translateX: -0.73,
        translateY: -0.30,
        scale: 0.1,
        get icon() {
          return item?.icon;
        }
      }), _el$31);
      insert(_el$31, createComponent(For, {
        get each() {
          return cutString(item?.title);
        },
        children: str => (() => {
          const _el$32 = _tmpl$8();
          insert(_el$32, str);
          return _el$32;
        })()
      }));
      createRenderEffect(() => setAttribute(_el$26, "class", `icon-container action-item ${activeSmall() === item.id ? "active" : ""}`));
      return _el$26;
    })();
  };
  const GenerateSmallMenuViews = props => {
    return (() => {
      const _el$33 = _tmpl$12(),
        _el$34 = _el$33.firstChild;
      insert(_el$33, createComponent(For, {
        get each() {
          return props.renderItems;
        },
        children: rowC => createComponent(SmallMenuRow, {
          rowItem: rowC
        })
      }), _el$34);
      createRenderEffect(() => setAttribute(_el$33, "class", `item all_items_cont g-${props.renderItems ? props.renderItems.length : 0}`));
      return _el$33;
    })();
  };
  const distributions = [[],
  //0
  [0, 0, 1],
  //1
  [0, 1, 1],
  //2
  [0, 0, 3],
  //3
  [1, 2, 1],
  //4
  [0, 2, 3],
  //5
  [1, 2, 3],
  //6
  [0, 4, 3],
  //7
  [1, 2, 3, 2],
  //8
  [2, 3, 4],
  //9
  [3, 4, 3],
  //10
  [5, 4, 2],
  //11
  [5, 4, 3] //12
  ];

  const GenerateMenuViews = props => {
    const [startIndex, setStartIndex] = createSignal(0);
    createEffect(() => {
      setStartIndex((props.pageIndex - 1) * 12);
    });
    const distributeItems = items => {
      const rows = [];
      const total = items.length;
      let distribution = [];
      if (total >= 1 && total <= 12) {
        distribution = distributions[total];
      }
      for (let count of distribution) {
        rows.push(items.splice(0, count));
      }
      return rows;
    };
    const renderList = () => {
      const items = props.renderItems.filter(item => item.id !== "_more").slice(startIndex(), startIndex() + 12);
      const length = items.length;
      const rows = distributeItems(items);
      setGridTh(length);
      setPageItemsF(rows); // Assuming the function expects this shape. Adjust if needed.
      return rows;
    };
    return createComponent(For, {
      get each() {
        return renderList();
      },
      children: row => createComponent(Row, {
        rowItems: row
      })
    });
  };
  return (() => {
    const _el$35 = _tmpl$14(),
      _el$36 = _el$35.firstChild;
    insert(_el$36, createComponent(Show, {
      get when() {
        return normalRenderList().length;
      },
      get children() {
        return [createComponent(GenerateMenuViews, {
          get renderItems() {
            return normalRenderList();
          },
          get pageIndex() {
            return page();
          }
        }), createComponent(InterfaceInteractionItems, {})];
      }
    }));
    insert(_el$35, createComponent(Show, {
      get when() {
        return smallRenderList().length;
      },
      get children() {
        const _el$37 = _tmpl$13(),
          _el$38 = _el$37.firstChild;
        insert(_el$38, createComponent(GenerateSmallMenuViews, {
          get renderItems() {
            return smallRenderList();
          }
        }));
        return _el$37;
      }
    }), null);
    createRenderEffect(_p$ => {
      const _v$ = `wrapper ${showMenu() ? "toggle" : ""}`,
        _v$2 = `content center ${smallRenderList() && smallRenderList().length ? "with-small" : ""}`;
      _v$ !== _p$._v$ && className(_el$35, _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && className(_el$36, _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$35;
  })();
};
delegateEvents(["click"]);

const App = () => {
  return createComponent(interfaceView, {});
};

const root = document.getElementById("root");
render(() => createComponent(App, {}), root);
