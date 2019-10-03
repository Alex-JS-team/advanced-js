/*  Начальные 3 цифры в каждом номере- это код оператора
	 Сделать вывод  в консоль таким
	(063) 111 1234
	(333) 456 8768
	(444) 657 5547
	*/
	let st = `063-111-1234
	(333) 456-8768
    4446575547
    1111111111`;
	
	function format(phone) {
	    phone = phone.replace(/[\D]/g, ""); // вибирає все крім цифр і міняє на ''
	    phone = phone.match(/.{1,10}/g); //  робить з строки масив (значення в дужках виділяє цифри від 1 до 10)
	
	    let newPhone= [];
	    phone.forEach(function(i) {
	        newPhone.push(i.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3')); // ???
	    });
	    return newPhone;
	}
	
    console.log(format(st));