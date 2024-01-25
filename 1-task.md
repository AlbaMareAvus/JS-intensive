# Task 1 - Создать объект counter всеми возможными способами

### Литеральная форма
```js
  const counter = {
    count: 0
  };
```

### С помощью ключевого слова new
```js
  const counter = new Object();
  counter.count = 0;
```

### С помощью встроенного метода Object.create()
```js
  const counter = Object.create({}, { count: 0 });
```

### С помощью встроенного метода Object.assign()
```js
  const counter = Object.assign({}, { count: 0 });
```
