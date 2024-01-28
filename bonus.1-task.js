/**
 * Функция глубокого сравнения двух объектов
 * @param {Object} obj1 первый объект
 * @param {Object} obj2 второй объект
 * @returns {Boolean|String} Результат сравнения (true/false) или сообщение об ошибки
 */
const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return 'Error: value(s) is(are) not object(s)';
  if (obj1 === null || obj2 === null) return 'Error: value(s) is(are) null';

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  if (
    obj1 instanceof Array && !(obj2 instanceof Array) ||
    !(obj1 instanceof Array) && obj2 instanceof Array
  ) {
    return false;
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;

    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      const result = deepEqual(obj1[key], obj2[key]);
      
      if (result === false) return false;
      //TODO typeof null
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

const obj1 = {
  here: { is: 'on', other: '3', arr: {} },
  object: 'Y'
};

const obj2 = {
  here: { is: 'on', other: '3', arr: null },
  object: 'Y'
};

console.log(deepEqual(obj1, obj2));
