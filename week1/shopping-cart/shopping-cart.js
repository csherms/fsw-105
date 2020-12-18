//string
//number
//boolean
//method
var shopper = {
    firstName: "Casey",
    lastName: "Sherman",
    age: 30,
    hasCreditCard: true,
    shoppingCart: ["Apples", "Bananas", "Oranges"],
    listCartItems: function() {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old and has " + this.shoppingCart + " in his shopping cart."
    }
}

console.log(shopper.listCartItems());