/*
Реализовать иерархию классов синтаксисом ES 5 согласно 
диаграммы классов приведенной в презентации home_oop
*/

function CDProduct(name, price, length) {
  this.name = name;
  this.price = price;
  this.length = length;
  this.text = 'length';
  this.getInfo = function () {
    return 'Product: ' + this.name + ', price: ' + this.price + ', ' + this.text + ' ' + this.length;
  }
};

function BookProduct() {
  CDProduct.apply(this, arguments);
  this.text = 'pages';
};

BookProduct.prototype = Object.create(CDProduct.prototype);

// usage
const cd = new CDProduct("Abbey road", 30, 45.20);
console.log(cd.getInfo()); // Product: Abbey road, price: 30, length: 45.2

const book = new BookProduct("React", 60, 125);
console.log(book.getInfo()); //  Product: React, price: 60,  pages: 125




