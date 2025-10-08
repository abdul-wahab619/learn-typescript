"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["Abdul", 23, true];
console.log(user[0]); // "Abdul"
console.log(user[1]); // 23
console.log(user[2]); // true
// user[3] = "new value"; // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
var person = ["Ali"]; // optional elements
person = ["Ali", 30];
person = ["Ali", 30, true];
// person = ["Ali", 30, true, "extra"]; // Error: Tuple type '[string, number?, boolean?]' of length '3' has no element at index '3'.
var colors = ["red", "blue", "green"];
colors.push("yellow");
colors.push("purple", "orange");
// Use Case:
// Tuples are great when you need structured data of mixed types, like:
// [statusCode, message]
var response = [200, "OK"];
// [id, name, isAdmin]
var userInfo = [1, "Alice", true];
// [latitude, longitude]
var location = [40.7128, -74.006];
// [name, age, isActive]
var userStatus = ["Bob", 25, false];
