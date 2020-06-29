/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1,23,"5",3,5,7];

// Решение

const _every = (array, callback) => {

  
if (!Array.isArray(array)) {
  throw new Error("argument not array!")
}
else if (typeof callback !== 'function'){
  throw new Error("argument not function!")
} else {
  let result = true;
  const len = array.length;
  for (let item = 0; item < len; item++){
    if(callback(array[item], item, array)) continue;
      result = false;
  } 
  return result;
}
}; 


const result = _every(array, (element, item, array) => {
    console.log(`${item}:`, item, array);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = _every;
