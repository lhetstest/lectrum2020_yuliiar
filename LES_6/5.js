/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];

const INITIAL_ACCUMULATOR = 6;
// Решение

const _reduce(array, callback, startValue) => {
  if (!Array.isArray(array)) {
    throw new Error("argument not array!");
  } else if (typeof callback !== "function") {
    throw new Error("argument not function!");
  } else {
    let length = array.length;
    let result = startValue ?? array[0];
    for (let item = 0; item < length; item++) {
      memory = callback(memory, array[item], item, array);
    }
    return result;
  }
}


const result = _reduce(
    array,
    (accumulator, element, item, arrayRef) => {
        console.log(`${item}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = _reduce;
