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

function CDProduct(title, price, length) {
    ShopProduct.apply(this, arguments);
    this.length = length;

    this.getInfo = () => `Product: ${this.title}, price: ${this.price}, length: ${this.length}`;
}

function BookProduct(title, price, pages) {
    ShopProduct.apply(this, arguments);
    this.pages = pages;

    this.getInfo = () => `Product: ${this.title}, price: ${this.price}, pages: ${this.pages}`;
}


// usage
const cd = new CDProduct("Abbey road", 30, 45.20);
console.log(cd.getInfo()); // Product: Abbey road, price: 30, length: 45.2

const book = new BookProduct("React", 60, 125);
console.log(book.getInfo()); //  Product: React, price: 60,  pages: 125




