// Narrowing in TypeScript means refining a broader type (like string | number) into a more specific one (like just string) based on runtime checks.
// Type Guards are expressions that perform these runtime checks to help the TypeScript compiler understand the specific type of a variable within a certain scope.
// Common ways to narrow types include using typeof, instanceof, and in operators.
function detectType(x) {
    if (typeof x === "string") {
        return x.toLowerCase();
    }
    return x + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
    console.log(id);
    return id;
}
provideId("123");
provideId(null);
// instanceof
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function getInfo(person) {
    if ("permissions" in person) {
        console.log(person.permissions);
    }
    else {
        console.log(person.email);
    }
}
getInfo({ role: "admin", permissions: ["read", "write"] });
// equality narrowing
function compare(a, b) {
    if (a === b) {
        console.log(a.toUpperCase()); // both are strings
    }
}
compare("hello", "hello");
function isFish(animal) {
    return animal.swim !== undefined;
}
function move(animal) {
    if (isFish(animal)) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
