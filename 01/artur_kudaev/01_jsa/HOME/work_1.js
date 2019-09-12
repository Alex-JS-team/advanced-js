
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

  let res = str.map(el=> el.match(/\d/g).join(''));
  let r = res.map(el=>el.replace(/\d+/, '('+el.substr(0,3)+') '+el.substr(3,3)+' '+el.substr(6,4)));

  return r;
}

console.log(splitNumber(str))


