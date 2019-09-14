/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/

const st = `063-111-1234
(333) 456-8768
4446575547`;

const allNumbers = /\(?\d{3}\)?(\s|\-)?(\d{3}\-\d{4}|\d{7})/g
const numberOperator = /\(?\d{3}\)?/
const blockOne = /((\s|\-)|\d{3})(\d{3})/
const blockTwo = /((\s|\-)|\d{6})(\d{4})/

const matched = st.match(allNumbers)



const processedNumbers = []
matched.forEach(function(item){
    const operator = item.match(numberOperator)[0].replace(/[()]/g, '')
    const block1 = item.match(blockOne)[3]
    const block2 = item.match(blockTwo)[3]

    const string = `(${operator}) ${block1} ${block2}`
    console.log(string)
})

