
/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

function format(phone) {
    phone = phone.replace(/[^\d]/g, "");
    phone = phone.match(/.{1,10}/g);

    let newPhone= [];
    phone.forEach (function(i) {
        newPhone.push(i.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3"));
    });
    return newPhone;
}

var result = format(st);
result.forEach(number => console.log(number))