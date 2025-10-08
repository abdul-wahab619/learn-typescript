"use strict";
// In TypeScript, an interface defines the structure or shape of an object — specifying what properties and methods it must have. It’s a great way to add type safety and readability to your code.
Object.defineProperty(exports, "__esModule", { value: true });
var employee = {
    name: "John Doe",
    age: 28,
    isEmployed: true,
};
console.log(employee.name); // "John Doe"
console.log(employee.age); // 28
console.log(employee.isEmployed); // true
var laptop = { id: 1, name: "MacBook" };
var std = {
    name: "Ali",
    rollNo: 101,
    greet: function () { return "Hello, I’m Ali!"; },
};
var admin = {
    name: "Wahab",
    email: "wahab@example.com",
    role: "super-admin",
};
var addNumbers = function (x, y) { return x + y; };
console.log(addNumbers(5, 10)); // 15
