# Task 1 - Метод запроса OPTIONS

Метод OPTIONS позволяет запросить информацию о сервере, в том числе информацию о допускаемых к использованию на сервере HTTP методов.

Синтаксис

```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

В ответе на запрос в заголовке `Allow` будут содержаться разрешенные методы.

При настроенной политики CORS браузер сам будет посылать предзапрос на сервер перед основным запросом (для непростых запросов). Для этого он посылает запрос OPTIONS на тот же адресс с заголовками: 

- `Origin` - исходный домен запроса
- `Access-Control-Request-Method` - содержит запрашиваемый метод
- `Access-Control-Request-Headers` - перечисляет непростые запрашиваемые заголовки

Сервер должен ответить со статусом 200 и заголовками:

- `Access-Control-Allow-Methods` со списком разрешённых методов
- `Access-Control-Allow-Headers` со списком разрешённых заголовков
- `Access-Control-Max-Age` с количеством секунд для кеширования разрешений

После чего отправляется основной запрос на сервер (или JS получит ошибку, если со стороны сервера нет разрешения).

> #### Полезные материалы
> - [Fetch: запросы на другие сайты](https://learn.javascript.ru/fetch-crossorigin)
> - [Метод options](https://cloud.yandex.ru/ru/docs/storage/s3/api-ref/object/options)
> - [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)