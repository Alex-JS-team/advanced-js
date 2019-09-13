
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
const numberRegExp = /\(?\d{3}\)?(\s|\-)?(\d{3}\-\d{4}|\d{7})/g
const operatorRegExp = /\(?\d{3}\)?/
const block1RegExp = /((\s|\-)|\d{3})(\d{3})/
const block2RegExp = /((\s|\-)|\d{6})(\d{4})/

// Revome operator parentheses
const processOperator = operator => operator.replace(/[()]/g, '')

// Match numbers with regex and format it in a new way
const formattedNumbers = st
  .match(numberRegExp)
  .map(number => `(${processOperator(number.match(operatorRegExp)[0])}) ${number.match(block1RegExp)[3]} ${number.match(block2RegExp)[3]}`)

// Output
formattedNumbers.forEach(number => console.log(number))
