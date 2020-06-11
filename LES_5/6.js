/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isEven = (value) => {
  if(typeof value !== "number"){
    throw new Error("аргумент value должен быть числом");
  };
  const res = value%2 ===0;
  return res;

}
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(5));
console.log(isEven(45));

exports.isEven = isEven;
