# Task 3 - Способы отмены запроса

Для отправки HTTP заросов существуют несколько способов - как уже устаревших (использование HTML форм и встроенный браузерный объект XMLHttpRequest), так и современный способ (метод fetch).

В случае если нам необходимо по каким-либо причинам отменить запрос, то при использовании **XMLHttpRequest** мы можем воспользоваться методом abort()

```js
  let xhr = new XMLHttpRequest();

  xhr.open('GET', '/article/xmlhttprequest/example/json');

  xhr.send();
  
  if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW) {
    xhr.abort();
  }
```

При этом генерируется событие `abort`, а `xhr.status` устанавливается в `0`.

Если же мы используем метод **fetch**, то для отмены отправки мы можем использовать специальный встроенный объект `AbortController` (его можно использовать для людых асинхронных задач).

1. Создаем контроллер - объект, который содержит единственный метод `abort()` и единственное свойство `signal`.

2. Передаем свойство `signal` опцией в метод `fetch` (метод `fetch` умеет работать с `AbortController`, он слушает событие `abort` на `signal`).

3. Вызываем метод `abort` (когда `fetch` отменяется, его промис завершается с ошибкой `AbortError`)

```js
  const controller = new AbortController(); // 1 
  const signal = controller.signal;

  const url = "video.mp4";
  const downloadBtn = document.querySelector(".download");
  const abortBtn = document.querySelector(".abort");

  downloadBtn.addEventListener("click", fetchVideo);

  abortBtn.addEventListener("click", () => {
    controller.abort(); // 3
    console.log("Download aborted");
  });

  function fetchVideo() {
    fetch(url, { signal }) // 2
      .then((response) => {
       console.log("Download complete", response);
      })
      .catch((err) => {
        console.error(`Download error: ${err.message}`);
      });
  }
```

> #### Полезные материалы
> - [XMLHttpRequest](https://learn.javascript.ru/xmlhttprequest#otmena-zaprosa)
> - [XMLHttpRequest: abort() method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort)
> - [Fetch: прерывание запроса](https://learn.javascript.ru/fetch-abort)
> - [AbortController: abort() method](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)
