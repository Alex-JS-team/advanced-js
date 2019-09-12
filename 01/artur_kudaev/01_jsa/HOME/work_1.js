
/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let str = `063-111-1234
(333) 456-8768
4446575547`;


function splitNumber(str) {
  str = str.split('\n');
  return res = str.map(el=> el.match(/\d/g).join('').replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3"));
}

console.log(splitNumber(str))


