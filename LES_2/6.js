// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
const array = [1, 2, 3, 4];

////////////////// Решение //////////////////

let i;
let sum = 0;
for (i of array) {
  sum += i;
}

console.log(sum)