/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(par) {
  
  if (typeof par !== "string") {
    throw new Error("аргумент должен быть строкой");
  }
  if (par === "") {
    return par;
  }
  const str = par.trim();
  const result = `${str[0].toUpperCase()}${str.substring(1)}`;
  return result;
}

const answer = upperCaseFirst("pitter");
console.log(answer); // Pitter

const result = upperCaseFirst(""); // ''
console.log(result);

exports.upperCaseFirst = upperCaseFirst;
