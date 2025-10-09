var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// difference between generics and any
// Generics provide a way to create reusable components that can work with any data type while maintaining type safety. They allow you to define a placeholder type that can be replaced with a specific type when the component is used.
// Any, on the other hand, is a type that can hold any value without type checking. When you use any, you lose the benefits of type safety, as it allows you to assign values of any type to a variable without restrictions.
identityFour("hello");
identityFour(3);
identityFour(true);
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    // do some database operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
anotherFunction(3, { name: "ali" });
anotherFunction("3", { name: "ali" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    Sellable.prototype.getCart = function () {
        return this.cart;
    };
    return Sellable;
}());
var sellable = new Sellable();
sellable.addToCart({ name: "quiz1", type: "quiz" });
sellable.addToCart({ name: "course1", author: "ali", subject: "math" });
console.log(sellable.getCart());
