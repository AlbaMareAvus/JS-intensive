# Task 4 - let, const and ReferenceError

При обращении к переменным, созданным через `let` и `const`, до их объявления мы получаем ошибку ReferenceError, потому что у `let` и `const` есть так называемая temporal dead zone (TDZ) - момент выполнения скрипта до объявления переменной.

```js
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
```

---

#### А что с var?
У переменных, объявленных при помощи `var`, TDZ заканчивается сразу после ее всплытия (hoisting).

```js
  // bestFood’s TDZ starts and ends here
  console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
  var bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
  console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
```
