/**
 * Функция, возвращающая массив с первой парой чисел, равной total
 * @param {Array} arr - массив с исходными данными
 * @param {Number} total - число, с которым сравниваем суммы
 */
const firstSum = (arr, total) => {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }

  return null;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

console.log( firstSum(arr, total) ); // [4, 9]

// Сложность данного алгоритма будет O(n^2)
