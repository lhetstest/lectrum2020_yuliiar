/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(streeng, maxLength) {
  if (typeof streeng !== "string" ) {
    throw new Error("аргумент должен быть строкой");
  } else if (typeof maxLength !== "number") {
    throw new Error("maxLength должен быть number");
  }
  const result = streeng.length;
  if (result > maxLength) {
    const newString = streeng.replace(streeng.slice(18), '...');
    return newString;
  } else {
    return string;
  }
  
}
const itogo = truncate('Вот, что мне хотелось бы сказать на эту тему:', 21);
console.log(itogo);

// 'Вот, что мне хотел...'

exports.truncate = truncate;
