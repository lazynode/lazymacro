# lazymacro

macros for javascript

## tutorial

1. install

    ```sh
    npm install lazymacro
    ```

2. require `lazymacro` in your source code

    ```js
    require('lazymacro');
    ```

3. enjoy the macros:

    ```js
    ["I", "am"].WITH(v => v.push("lazynode.")).WITH(console.log).PIPE(v => v.join(" ")).PIPE(v => console.log(`${v}`))?.PIPE(v => console.log("null safety features can be used together!"));
    ```

## reference

the macros provided in lazymacro

### basic macros

- `PIPE`: `O.PIPE(F)` returns `F(O)`

    ```js
    "OK".PIPE(v => v + "!") == "OK!"
    ```

- `WITH`: `O.WITH(F)` runs `F(O)` and returns `O`

    ```js
    ["O", "K"].WITH(v => v.push("!")).PIPE(v => v.join('')) == 'OK!'
    ```

    ```js
    "OK".WITH(v => v + "!") == "OK!"
    ```

- `THEN`: `O.THEN(F)` returns `O.then(F)` 

    ```js
    await Promise.resolve(5).THEN(v => v + 1) === 6
    ```

- `WAIT`: `O.WAIT(F)` awaits `O.then(F)` returns `O`

    ```js
    await Promise.resolve(["O", "K"]).WAIT(async v => new Promise(resolve => setTimeout(() => resolve(v.push("!")), 1000))).THEN(v => v.join('')) == "OK!"
    ```

- `XMAP`: `O.XMAP(F)` returns an array of `F(o, k)` where `o` and `k` are each element of `O`

    ```js
    ["O", "K"].XMAP(v => v.toLowerCase()).PIPE(v => v.join('')) == "ok"
    ```

    ```js
    ({ o: "O", k: "K" }).XMAP((v, k) => k + v.toLowerCase()).PIPE(v => v.join('')) == "ookk"
    ```

### this macros

same as the related basic macro but use `this` instead of the function paramter

arrow fuction expressions cannot be used as parameter of this macros because `this` is lost in arrow function expressions

- `PIPETHIS`

    ```js
    "OK".PIPETHIS(function () { return this.toLowerCase() }) == "ok"
    ```

- `WITHTHIS`

    ```js
    ["O", "K"].WITHTHIS(function () { this.push("!") }).PIPE(v => v.join('')) == 'OK!'
    ```

- `THENTHIS`

    ```js
    await Promise.resolve("OK").THENTHIS(function () { return this.toLowerCase() }) == "ok"
    ```

- `XMAPTHIS`

    ```js
    ["O", "K"].XMAPTHIS(function () { return this.toLowerCase() }).PIPE(v => v.join('')) == "ok"
    ```

- `WAITTHIS`

    ```js
    await Promise.resolve(["O", "K"]).WAITTHIS(async function () { await new Promise(resolve => setTimeout(resolve, 1000)); this.push("!") }).THEN(v => v.join('')) == "OK!"
    ```
