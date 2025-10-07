"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currentUser = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: true,
};
var userProfile = {
    name: "Jane",
    age: 25,
    email: "jane@example.com",
    isActive: false,
};
function getUserInfo(user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat(user.email, ", Active: ").concat(user.isActive);
}
function getUserProfile(user) {
    var _a;
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat(user.email, ", Active: ").concat(user.isActive, ", Address: ").concat((_a = user.address) !== null && _a !== void 0 ? _a : "N/A");
}
console.log(getUserInfo(currentUser));
console.log(getUserProfile(userProfile));
