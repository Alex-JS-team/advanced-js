
/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
// let st = `063-111-1234
// (333) 456-8768
// 4446575547`;


// function inArray(arr) {
//     return function (x) {
//         return x === a || x === b || x === c;
//     };
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// alert(arr.filter(inArray([1,2,10])) );

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(field) {
      return (a,b) => a[field] > b[field] ? 1 : -1;
  }

  users.sort(byField("name"));
  users.forEach(user => alert(user.name));

  users.sort(byField("age"));
  users.forEach(user => alert(user.name));