# Task 6 - JS task

```js
const res = "B" + "a" + (1 - "hello");
console.log(res); // "B" + "a" + NaN = "BaNaN"
```

```js
const res2 = (true && 3) + "d";
console.log(res2); // 3 + "d" = "3d"
```

```js
const res3 = Boolean(true && 3) + "d";
console.log(res3); // Boolean(3) + "d" = true + "d" = "trued"
```
