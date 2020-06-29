/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение


const _some = (array, callback) => {

if (!Array.isArray(array)) {
  throw new Error("argument not array!")
}
else if (typeof callback !== 'function'){
  throw new Error("argument not function!")
} else {
  let result = false;
  const len = array.length;
  for (let item = 0; item < len; item++) {
    if (callback(array[item], item, array)) continue;
    result = true;
  }
  return result;
}
};


const result = _some(array, (element, item, arrayRef) => {
    console.log(`${item}:`, item, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = _some;
