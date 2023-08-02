//create an object
class Bakery {
  constructor(coname) {
    this._coname = coname
  }
  get name() {
    return this._name
  }
}

class Item {
  constructor(coname, type, name, price) {
    this._coname = coname
    this._type = type
    this._name = name
    this._price = price
  }
  get coname() {
    return this._coname
  }
  get type() {
    return this._type
  }
  get name() {
    return this._name
  }
  get price() {
    return this._price
  }
}

class Food extends Item {
  constructor(coname, type, name, price, flavorPro, temp) {
    super(coname, type, name, price)
    this._flavorPro = flavorPro
    this._temp = temp
  }
  
  get flavorPro() {
    return this._flavorPro
  }
  get temp() {
    return this._temp
  }
  serve() {
    return `At ${this.coname} we love making delicious bakery items, soups and specialty coffees. Your order today for the ${this.type} will be ready shortly.`
  }
}

//food Superclasses of types
class Cookie extends Food {
  constructor(coname, type, name, price, flavorPro, temp, seasonal) {
    super(coname, type, name, price, flavorPro, temp)
    this._seasonal = seasonal
  }

  cookie() {
    return `${this.name} ${this.type}  price: $${this.price.toFixed(2)}. Store at ${this.temp}.`
  }
}

class Bagel extends Food {
  constructor(coname, type, name, price, flavorPro, temp, seasonal,extras) {
    super(coname, type, name, price, flavorPro, temp)
    this._extras = extras
  }
  get specialty() {
    return this._specialty
  }
  get extras() {
    return this._extras
  }
  
  bagel() {
    return `${this.name} ${this.type} is served ${this.temp} price:$${this.price.toFixed(2)}. ${this.extras} can be requested at an additional cost. `
  }
}


const peanutbutter = new Cookie('Sweets Day & Night Bakery', 'Cookie', 'Old Fashion PeanutButter', 2.50, 'sweet', 'room temperature', false)
const frostedSugar = new Cookie('Sweets Day & Night Bakery','Cookie', 'Frosted Sugar Cookie', 3, 'sweet', 'chilled', false)
const spicedginger = new Cookie('Sweets Day & Night Bakery', 'Cookie', 'Holiday Spiced Gingersnap', 1.75, 'sweet', 'room temperature')

const everythingBagel = new Bagel('Sweets Day & Night Bakery', 'Bagel', 'Mervs Everything', 2, 'Savory', 'sliced & toasted', false, 'Cream Cheese, Lox')
const blueberry = new Bagel('Sweets Day & Night Bakery', 'Bagel', 'Double Blueberry', 2, 'Savory', 'sliced & toasted', false,'Cream Cheese, Mervs specialty Jams')



console.log(everythingBagel.serve());
console.log(everythingBagel.bagel());
console.log(peanutbutter.serve());
console.log(peanutbutter.cookie());

