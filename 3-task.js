/**
 * Напишите функцию, которая будет проходить через массив целых чисел
 * и выводить индекс каждого элемента с задержкой в 3 секунды.
 */
const printIndexAfterDelay = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000 * (i + 1));
  }
};

const arr = [10, 12, 15, 21];
printIndexAfterDelay(arr);
