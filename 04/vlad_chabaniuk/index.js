function titleGetter (state) {
  return {
    getTitle () {
      return state.title
    }
  }
}

function titleSetter (state) {
  return {
    setTitle (newTitle) {
      state.title = newTitle
    }
  }
}

function priceGetter (state) {
  return {
    getPrice () {
      return state.price
    }
  }
}

function priceSetter (state) {
  return {
    setPrice (newPrice) {
      state.price = newPrice
    }
  }
}

function numPagesGetter (state) {
  return {
    getNumPages () {
      return state.numPages
    }
  }
}

function playLenthGetter (state) {
  return {
    getPlayLength () {
      return state.playLength
    }
  }
}


function infoGetter (state) {
  return {
    getInfo () {
      return `Product "${state.title}" price: $${state.price} ${state.playLength ? `length: ${state.playLength}` : state.numPages ? `pages: ${state.numPages}` : ''}`
    }
  }
}

function ShopProduct (title, price) {
  var state = {
    title,
    price,
  }

  return Object.assign(
    priceGetter(state),
    priceSetter(state),
    titleGetter(state),
    titleSetter(state),
    infoGetter(state)
  )
}

function CDProduct (title, price, playLength) {
  var state = {
    title,
    price,
    playLength
  }

  return Object.assign(
    priceGetter(state),
    priceSetter(state),
    titleGetter(state),
    titleSetter(state),
    infoGetter(state),
    playLenthGetter(state)
  )
}

function BookProduct (title, price, numPages) {
  var state = {
    title,
    price,
    numPages
  }

  return Object.assign(
    priceGetter(state),
    priceSetter(state),
    titleGetter(state),
    titleSetter(state),
    infoGetter(state),
    numPagesGetter(state)
  )
}

var youDontKnowJs2 = new BookProduct('You Don\'t know JS: Types & Grammar', 21.49, 198)
var theGetaway = new CDProduct('RHCP: The Getaway', 18, 13)

console.log(youDontKnowJs2.getInfo()) // -> Product "You Don't know JS: Types & Grammar" price: $21.49 pages: 198
console.log(theGetaway.getInfo()) // -> Product "RHCP: The Getaway" price: $18 length: 13

youDontKnowJs2.setTitle('You Don\'t know JS: Up & Going')
theGetaway.setTitle('RHCP: Stadium Arcadium')
youDontKnowJs2.setPrice(25.5)
theGetaway.setPrice(17.84)

console.log(youDontKnowJs2.getInfo()) // -> "You Don't know JS: Up & Going" price: $25.5 pages: 198
console.log(theGetaway.getInfo()) // -> Product "RHCP: Stadium Arcadium" price: $17.84 length: 13
