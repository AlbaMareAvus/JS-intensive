/**
 * 
 * @param {String} url - адрес запроса
 * @param {Number} i - количество запросов
 * @returns Ответ на запрос или сообщение об ошибки после 5 неудачных запросов
 */
const fetchUrl = function(url, i = 1) {
  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => {
      if (i < 5) {
        i++;
        fetchUrl(url, i);
      } else {
        console.log('err after 5 tries')
      }
    });
};

fetchUrl('https:// jsonplaceholder.typicode.com/todos/1');
