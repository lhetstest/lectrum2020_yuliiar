/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
function f(array, callback) {
  if (!Array.isArray(array)) {
    throw new Error("argument not array!")
  }
  else if (!array.length){
    throw new Error("array is empty")
  }
  callback(array)
}

function printArrayItems(array) {
  if (array.length) {
    console.log(array[0])
    printArrayItems(array.slice(1))
  }
}

f([1, 2, 3,4], printArrayItems)
// 1
// 2
// 3

exports.f = f;
