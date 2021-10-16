# lazymacro

macros for javascript

## tutorial

1. install

    ```sh
    npm install lazymacro
    ```

2. require `lazymacro` in your source code

    ```js
    require('lazymacro')
    ```

3. enjoy the macros:

    ```js
    ["I", "am"].WITH(v => v.push("lazynode.")).WITH(console.log).PIPE(v => v.join(" ")).PIPE(v => console.log(`${v}`))
    ```

## reference

for better description, the meanings of variables in this section can be referenced below where `MACRO` can be replace by the explained macro

```
RESULT = OBJECT.MARCO(ARGUMENT)
```

### basic macros

- `PIPE`: using a function `ARGUMENT` to convert `OBJECT` to `RESULT`

    ```js
    "OK".PIPE(v => v + "!") == "OK!"
    ```

- `WITH`: apply a function `ARGUMENT` to `OBJECT` and return `OBJECT`

    ```js
    ["O", "K"].WITH(v => v.push("!")).PIPE(v => v.join('')) == 'OK!'
    ```

    ```js
    "OK".WITH(v => v + "!") == "OK!"
    ```

- `THEN`: same as `Promise.then`

    ```js
    await Promise.resolve(5).THEN(v => v + 1) === 6
    ```

### this macros

**ARROW FUCTION EXPRESSIONS CANNOT BE USED AS PARAMETER OF THIS MACROS BECAUSE `this` is LOST IN ARROW FUNCTION EXPRESSIONS**

- `PIPETHIS`: same as `PIPE` but use `this` instead of the function paramter

    ```js
    "OK".PIPETHIS(function () { return this.toLowerCase() }) == "ok"
    ```

- `WITHTHIS`: same as `WITH` but use `this` instead of the function paramter

    ```js
    ["O", "K"].WITHTHIS(function () { this.push("!") }).PIPE(v => v.join('')) == 'OK!'
    ```

- `THENTHIS`: same as `THEN` but use `this` instead of the function paramter

    ```js
    await Promise.resolve("OK").THENTHIS(function () { return this.toLowerCase() }) == "ok"
    ```
