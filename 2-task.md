# Task 2 - Прочитать про способы хранения LocalStorage, SessionStorage и Cookie

**LocalStorage и SessionStorage** - объекты веб-хранилища, которые позволяют хранить пары типа ключ/значение в браузере.

Данные, которые хранятся в SessionStorage сохранятся в случае перезагрузки страницы, а те, которые хранятся в LocalStorage, - даже в случае перезагрузки браузера.

Методы:

- `setItem(key, value)` - сохранить пару ключ/значение.

- `getItem(key)` - получить данные по ключу `key`.

- `removeItem(key)` - удалить данные с ключом `key`.

- `clear()` - удалить все.

- `key(index)` - получить ключ на заданной позиции.

- `length` - количество элементов в хранилище.

**Cookie** - небольшие строки данных, которые хранятся непосредственно в браузере. Они являются частью HTTP-протокола. Один из наиболее частых случаев использования куки – это аутентификация.

> #### Полезные материалы
> - [LocalStorage, sessionStorage](https://learn.javascript.ru/localstorage)
> - [Куки, document.cookie](https://learn.javascript.ru/cookie)
> - [Document.cookie](https://developer.mozilla.org/ru/docs/Web/API/Document/cookie)
