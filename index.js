Object.defineProperties(Object.prototype, {
    PIPE: { value: function (f) { return f(this) } },
    WITH: { value: function (f) { f(this); return this } },

    PIPETHIS: { value: function (f) { return f.apply(this) } },
    WITHTHIS: { value: function (f) { f.apply(this); return this } },
})
