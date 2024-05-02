var v = (z, s, d) => new Promise((p, i) => {
    var I = f => {
      try {
        e(d.next(f));
      } catch (x) {
        i(x);
      }
    };
    var g = f => {
      try {
        e(d.throw(f));
      } catch (x) {
        i(x);
      }
    };
    var e = f => f.done ? p(f.value) : Promise.resolve(f.value).then(I, g);
    e((d = d.apply(z, s)).next());
  });
  (function (z) {
    "use strict";
  
    const I = new Map();
    function g(x, n) {
      const r = IsIplActive(x);
      I.set(x, n);
      if (n && !r) {
        RequestIpl(x);
      } else if (!n && r) {
        RemoveIpl(x);
      }
    }
    z.Events.onNet("np-ipl:setIPLStatus", (x, n) => {
      g(x, n);
    });
    z.Events.onNet("np-ipl:stateLoaded", x => {
      for (const [t, r] of Object.entries(x)) {
        g(t, r);
      }
    });
    const f = () => v(this, null, function* () {
      const n = yield z.Procedures.execute("np-ipl:getIPLConfigs");
      for (const t of n) {
        g(t.name, t.enabled);
      }
    });
    on("onClientResourceStart", x => {
      if (x === GetCurrentResourceName()) {
        f();
      }
    });
  })(NPX);