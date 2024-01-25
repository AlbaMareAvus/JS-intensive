/**
 * Функция, переворачивающая строку в обратном направлении при помощи методов массивов
 * @param {*} str исходная строка
 * @returns {String} перевернутая строка
 */
function reverseStr(str) {
  return str.trim().split('').reverse().join('');
}

const originalString = 'Some random text';

const reverseString = reverseStr(originalString);

console.log(`Исходная строка - ${originalString}; Перевернутая строка - ${reverseString}`);
