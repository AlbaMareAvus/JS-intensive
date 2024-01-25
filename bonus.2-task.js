function reverseStr(str) {
  return str.trim().split('').reverse().join('');
}

const originalString = 'Some random text';

const reverseString = reverseStr(originalString);

console.log(`Исходная строка - ${originalString}; Перевернутая строка - ${reverseString}`);
