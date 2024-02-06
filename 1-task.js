let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
.then((res) => {
  return res + "b"; // res = 'ab'
})
.then((res) => {
  return res + "с"; // res = 'abc'
})
.finally((res) => {
  return res + "!!!!!!!"; // Не принимает и не возвращает промис
})
.catch((res) => {
  return res + "d"; // не было reject или ошибок
})
.then((res) => {
  console.log(res); // 'abc'
});

// "abc"
