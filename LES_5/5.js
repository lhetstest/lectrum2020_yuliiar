/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 * 
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isPositive = (value) => {
  if(typeof value !== "number"){
    throw new Error("аргумент value должен быть числом");
  };
  const res = value > 0;
  return res;
}

console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true

exports.isPositive = isPositive;
