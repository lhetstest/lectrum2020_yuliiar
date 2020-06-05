/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
  if (typeof source !== "string" ) {
    throw new Error("аргумент должен быть строкой");
  } else if (typeof example !== "string") {
    throw new Error("example должен быть строкой");
  }
  if (source === "") {
    return source;
  } else if (example === "") {
    return example;
  }
  const str = source.trim().toLowerCase();
  const exmpl = example.trim().toLowerCase();
  const result = str.includes(exmpl)
  return result;
}
const result = checkSpam('pitterXXX@gmail.com', 'xxx');
console.log(result);

const other = checkSpam('pitterxxx@gmail.com', 'XXX'); // true
console.log(other);


exports.checkSpam = checkSpam;
