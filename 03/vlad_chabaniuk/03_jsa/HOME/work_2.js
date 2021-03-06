/*
* Написать функцию sum(a), которая должна вызываться как
*     sum(a)(b)  и возвращать сумму двух чисел
*   Например  sum(3)(1) -> 4  , sum(7)(-1) -> 6
* */

const sum = a => b => a + b

console.log(sum(3)(1)) // => 4
console.log(sum(7)(-1)) // => 6
