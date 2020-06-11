/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f(a) {
  if (typeof a !== 'number'){
    throw new Error("аргумент должен быть числом");
  } 
  const result = a*a*a;
  return result;
}

console.log(f(2)); // 8

exports.f = f;
