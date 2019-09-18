/*
 * Создать функцию filter(arr, func), которая
 *  - принимает в качестве аргументов массив arr и функцию func
 *  - возвращает новый массив, который содержит элементы arr,
 *    для которых func возвращает true.
 * Соответсвенно при проверке кода написать функцию func,
 * которая отбирает элементы  больше 50
 * */

const arr  = [11, 66, 33, 44, 22, 55, 2]

const filter = (arr, func) => arr.reduce((acc, curr) => func(curr) ? [...acc, curr] : acc, [])

const a = filter(arr, item => item > 50)

console.log(a)  // [66, 55]
