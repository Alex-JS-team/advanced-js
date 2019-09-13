

/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
// */
let st = `063-111-1234
(333) 456-8768
4446575547`;


function format(number) {
    number = number.replace(/[^\d]/g, "");
    number = number.match(/\d{1,10}/g);

    let newNumber = [];
    number.forEach (function(i) {
        newNumber.push(i.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3"));
    });
    return newNumber;
}

console.log(format(newNumber));