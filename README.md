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
    ["I", "am"].WITH(v => v.push("lazynode.")).WITH(v => console.log(v)).PIPE(v => v.join(" ")).PIPE(v => console.log(`${v}`))
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
