# Task 2 - Скопировать объект counter всеми возможными способами

### Исходный объект
```js
  const counter = {
    count: 0
  }
```

Так как исходный объект довольно простой (в нем нет других объектов в качестве значений), то мы можем воспользоваться следующими методами:

```js
  // Литеральная форма и spread оператор
  const counterCopy = {...counter};

  // Встроенный метод Object.assign()
  const couterCopy = Object.assign({}, counter);

  // Встроенный метод Object.create()
  const counterCopy = Object.create(counter);

  // JSON parse - stringify
  const counterCopy = JSON.parse(JSON.stringify(counter));
```

Кроме этих способов есть и более подходящие, так как они используют глубокое копирование объектов:

```js
  // Встроенная глобальная функция structuredClone()
  const counterCopy = structuredClone(counter);

  // Использовать сторонние библиотеки (например, lodash)
  const counterCopy = _cloneDeep(counter);

  // Написать свою реализацию глубокого копирования (см. функцию deepEqual в ./bonus.1-task.js)
```
