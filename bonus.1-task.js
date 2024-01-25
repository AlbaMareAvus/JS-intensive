const obj1 = {
  here: { is: 'on', other: '3' },
  object: 'Y'
};

const obj2 = {
  here: { is: 'on', other: '2' },
  object: 'Y'
};

/**
 * Функция глубокого сравнения двух объектов
 * @param {Object} obj1 первый объект
 * @param {Object} obj2 второй объект
 * @returns {Boolean|String} Результат сравнения (true/false) или сообщение об ошибки
 */
const deepEqual = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return 'Переданы не объекты';
  if (obj1 === null || obj2 === null) return 'Переданы значения null';

  if (obj1 instanceof Array && obj2 instanceof Array && obj1.length !== obj2.length) return false;

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;

    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      const res = deepEqual(obj1[key], obj2[key]);

      if (res === false) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

console.log(deepEqual(obj1, obj2));
