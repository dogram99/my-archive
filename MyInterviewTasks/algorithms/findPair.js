// function findPair(arr, target) {
//   // Создаем пустой объект, где будем хранить уже просмотренные числа
//   const nums = {};
//
//   // Проходим по каждому числу в массиве
//   for (let num of arr) {
//     // Рассчитываем разницу между целевым числом и текущим числом из массива
//     const difference = target - num;
//
//     // Проверяем, есть ли разница в объекте nums
//     if (nums[difference] !== undefined) {
//       console.log("!", [num, difference]);
//       // Если есть, то нашли пару, возвращаем пару чисел
//       return [num, difference];
//     }
//
//     // Если разницы нет в объекте nums, добавляем текущее число в объект nums
//     nums[num] = true;
//
//     console.log(`${num}:`, nums);
//   }
//
//   // Если не нашли пару, возвращаем null
//   return null;
// }


/**
 * Напиши на JS функцию, которая принимает два аргумента, массив из чисел и какое-то число.
 * Цель найти первую пару сумма которой будет равна второму аргументу
 * Сложность алгоритма должна быть быстрее n^2
 */
function findPair(arr, target) {}

// Пример использования функции
const array = [1, 2, 3, 4, 5];
const target = 7;

const result = findPair(array, target);
console.log(result); // [2, 5]
