
/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

st = st.replace(/[^\d]/g, "");
st = st.match(/.{1,10}/g);
let phoneNumber = [];

st.forEach (function(i) {
    phoneNumber.push(i.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3"));
});

console.log(phoneNumber);