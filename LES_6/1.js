/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */


const array = [1, 2, 3];

// Решение

const _forEach = (array, callback) => {
if (!Array.isArray(array)) {
  throw new Error("argument not array!")
}
else if (typeof callback !== 'function'){
  throw new Error("argument not function!")
} else {
  for (let item =0; item < array.length; item++)
    callback(array[item], item, array);
  }
}

const result = _forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = _forEach;
