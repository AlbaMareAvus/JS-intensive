# Task 2 - Прочитать про "Операторы и выражения, циклы в JS"

**Операторы** бывают унарные и бинарные.
Унарным называется оператор, который применяется к одному операнду, например:

```js
let x = 10;
x = -x; // унарный минус

let y = '123';
console.log(+y) // унарный плюс преобразовал строку в число
```

Бинарными называются оператор, который применяется к двум операндам, например:

```js
let x = 10 + 20; // бинарный плюс и бинарный знак присваивания
```

[Таблица с приоритетом выполнения операций](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Выражения** - любой корректный кусок кода, который возвращает значение. Выражения бувают двух видов - те, которые присваивают переменной значения `(x = 7)`, и те, которые вычисляют значения без его присваивания `(10 + 20)`.

**Циклы** в JS:
- Цикл for

```js
for (let i = 0; i < arr.length; i++) {
  // some code
}
```

- Цикл do...while (точно выполнится хотя бы раз)

```js
do {
  // some code
  i++;
} while (i < 5);
```

- Цикл while

```js
while (i < 5) {
  // some code
  i++;
}
```

- Цикл for...in (проходит по всем перечисяемым свойствам объекта)

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in obj) {
  console.log(i); // "0", "1", "2", "foo"
}
```

- Цикл for...of (проходит по всем значениям перечисляемых свойств объекта)

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i of arr) {
  console.log(i); // "3", "5", "7"
}
```

- Цикл forEach (метод массивов/Set/Map..)

```js
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));
```

Ключевое слово (директива) `break` позволяет выйти из цикла, а директива `continue` позволяет перейти к следующей итерации цикла.


> #### Полезные материалы
> - [Выражения и операторы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators)
> - [Базовые операторы, математика](https://learn.javascript.ru/operators#terminy-unarnyy-binarnyy-operand)
> - [Циклы и итерации](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration)
