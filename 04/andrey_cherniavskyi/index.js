/*
Реализовать иерархию классов синтаксисом ES 5 согласно 
диаграммы классов приведенной в презентации home_oop
*/


function ShopProduct(title, price) {
    this.title = title;
    this.price = price;

    this.getTitle = () => this.title;
    this.getPrice = () => this.price;
}

function CDProduct(title, price, playLength) {
    ShopProduct.apply(this, arguments);
    this.playLength = playLength;

    this.getInfo = () => `Product: ${this.title}, price: ${this.price}, length: ${this.playLength}`;
}
function BookProduct(title, price, numPages) {
    ShopProduct.apply(this, arguments);
    this.numPages = numPages;

    this.getInfo = () => `Product: ${this.title}, price: ${this.price}, pages: ${this.numPages}`;
}



// usage
const cd = new CDProduct("Abbey road", 30, 45.20);
console.log(cd.getInfo()); // Product: Abbey road, price: 30, length: 45.2

const book = new BookProduct("React", 60, 125);
console.log(book.getInfo()); //  Product: React, price: 60,  pages: 125