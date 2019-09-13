console.log("=========== Reducers ==============");

/* Reduce  -> это метод у массива для трансформации массива
* Например есть массив arr = [5,15,25] - нам надо получить сумму его элементов
* Общий вид
*     arr.reduce(function(accumulator, item, index, arr){ ... }, initialValue)
* то есть метод reduce принимает 2 аргумента
*  1 - это функция которая будет выполнена для каждого элемента массива
*      В эту функцию также передается 2 аргумента - переменная в  которую
*      будет накапливаться результат и  очередной элемент массива
*  2 -  начальное значение. Это не обязательный аргумент. если его не передать, то
*      в качестве начального значения будет 1-й элемент массива
*  3 - номер текущего элемента
*  4 - исходный массив
* */

const arr = [5, 15, 25];

function reducer(accumulator, item) {
  return accumulator + item;
}
const total = arr.reduce(reducer, 0);
/*
* ------------------------------------------------
* Номер итерации | accumulator | item |   return |
* ------------------------------------------------
*       1        |      0      |   5  |      5   |
*       2        |      5      |  15  |     20   |
*       3        |     20      |  25  |     45   |
*-------------------------------------------------
* */
console.log("Total: ", total);

/*  ============== Task 1 ============= */
/* Используя reduce надо вернуть объект, содержащий названия фреймворков
    и количество повторений в исходном массиве. Вид объекта
    ob = {angular: 3, react: 4, vue: 2}
*/
var frameworks = ["angular", "react", "vue", "react", "angular", "react", "react", "react", "vue"];



/*  ============== Task 2 ============= */
/* Используя reduce трансформировать исходный массив в массив того же размера,
 но значения которого будут увеличены в 2 раза, то есть
  [ 2,4,8]  => [4,8, 16]
*/
var nums = [2, 4, 8];

let newNums = nums.map(function (num) { return num * 2 });

console.log(newNums);


/*  ============== Task 3 - самостоятельно ============= */
/* Используя reduce трансформировать исходный массив в массив который содердит
   только четные значения исходного массива
  [1, 2, 3, 4, 5, 6, 7, 8]  => [2, 4, 6, 8]
*/
var nums2 = [1, 2, 3, 4, 5, 6, 7, 8];

function newNum(a) {
  var newArr = [];

  for (var i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(newNum(nums2));



/*  ============== Task 4  ============= */
/* Трансформировать исходный большой массив в массив который содердит
   только четные значения исходного массива, умноженные на 2
  Эту задачу надо рещить 2-мя способами -> итерационными методами и reduce
  и замерить время выполнения
*/

/*
var  bigData  = [];
for(let i = 0; i < 1000000; i++) {
    bigData[i] = i;
}
console.time("bigDataIteration");
console.timeEnd("bigDataIteration");


console.time("bigDataReduce");
console.timeEnd("bigDataReduce");

*/

/*  ============== Task 5  ============= */
/* Трансформировать исходный nested массив в  flatten массив
[[1,2,3], [4,5,6], [7,8,9]] => [ 1,2,3,4,5,6, 7,8,9];
*/
var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var flattenArr = nestedArr.reduce(function (a, b) { return a.concat(b) });
console.log(flattenArr);


/*  ============== Task 6 - Pipeline  ============= */

function increment(val) { return val + 1; }
function decrement(val) { return val - 1; }
function double(val) { return val * 2; }
function halve(val) { return val / 2; }

var initValue = 1;
var v1 = increment(initValue);
var v2 = double(v1);
var v3 = decrement(v2);
var v4 = halve(v3);

console.log(v4); // 1.5



/*********************************************/

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function (acc, curr) {
    return acc + curr;
} );

console.log(sum);