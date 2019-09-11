
/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/

const st = `063-111-1234
(333) 456-8768
4446575547`

// Regular expessions
const numberRegExp = /\(?\d\d\d\)?(\s|\-)?(\d\d\d\-\d\d\d\d|\d\d\d\d\d\d\d)/g
const operatorRegExp = /\(?\d\d\d\)?/
const block1RegExp = /((\s|\-)|\d\d\d)(\d\d\d)/
const block2RegExp = /((\s|\-)|\d\d\d\d\d\d)(\d\d\d\d)/

// Revome operator parentheses
const processOperator = operator => operator
  .replace('(', '')
  .replace(')', '')

// Match numbers with regex and format it in a new way
const formattedNumbers = st
  .match(numberRegExp)
  .map(number => `(${processOperator(number.match(operatorRegExp)[0])}) ${number.match(block1RegExp)[3]} ${number.match(block2RegExp)[3]}`)

// Output
formattedNumbers.forEach(number => console.log(number))
