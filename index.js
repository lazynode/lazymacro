Object.defineProperties(Object.prototype, {
    PIPE: { value: function (f) { return f(this) } },
    WITH: { value: function (f) { f(this); return this } },
    THEN: { value: function (f) { return this.then(f) } },
    WAIT: { value: function (f) { return this.then(async v => { await f(v); return v }) } },
    XMAP: { value: function (f) { const ret = []; for (var k in this) { ret.push(f(this[k], k)); } return ret } },

    PIPETHIS: { value: function (f) { return f.apply(this) } },
    WITHTHIS: { value: function (f) { f.apply(this); return this } },
    THENTHIS: { value: function (f) { return this.then(v => f.apply(v)) } },
    WAITTHIS: { value: function (f) { return this.then(async v => { await f.apply(v); return v }) } },
    XMAPTHIS: { value: function (f) { const ret = []; for (var k in this) { ret.push(f.apply(this[k], [k])); } return ret } },

    LAZY: { value: function (f) { return this instanceof Promise ? this.then(f).then(v => v ?? this) : f(this) ?? this } },
})
