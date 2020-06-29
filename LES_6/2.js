/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение



const _filter = (array, callback) => {
  
if (!Array.isArray(array)) {
  throw new Error("argument not array!")
}
else if (typeof callback !== 'function'){
  throw new Error("argument not function!")
} else {
  const filteredArray = [];
  const len = array.length;
  for (let index = 0; index < len; index++) {
    if (callback(array[index], index, array)) {
      filteredArray.push(array[index])
    }
  }

  return filteredArray;
}
};

console.log(_filter([1, 2, 4, 7, 10, 123], (item) => item > 4))

const filteredArray = _filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = _filter;
