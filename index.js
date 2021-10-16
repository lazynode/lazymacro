Object.defineProperties(Object.prototype, {
    LET: { value: function (f) { return f(this) } },
    LETME: { value: function (f) { return f.apply(this) } },
    APPLY: { value: function (f) { f.apply(this); return this } },
    APPLYME: { value: function (f) { f(this); return this } },
})
