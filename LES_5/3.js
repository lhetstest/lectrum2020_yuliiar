/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = (a,b,c) => {
  if (typeof a !== "number") {
    throw new Error("аргумент a должен быть числом");
  }
  if (typeof b !== "number") {
    throw new Error("аргумент b должен быть числом");
  }
  if (typeof c !== "number") {
    throw new Error("аргумент c должен быть числом");
  }
  if (c === 0) {
    throw new Error("Choose another number, it should not be 0");
  }
  result = (a - b)/c;
  return result;
}

console.log(f(9, 3, 2)); // 3

exports.f = f;
