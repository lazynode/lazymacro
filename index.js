Object.defineProperties(Object.prototype, {
    PIPE: { value: function (f) { return f(this) } },
    WITH: { value: function (f) { f(this); return this } },
    THEN: { value: function (f) { return this.then(f) } },

    PIPETHIS: { value: function (f) { return f.apply(this) } },
    WITHTHIS: { value: function (f) { f.apply(this); return this } },
    THENTHIS: { value: function (f) { return this.then(v => f.apply(v)) } },
})
