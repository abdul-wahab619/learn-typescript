"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userId;
userId = "123";
userId = 123;
// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
console.log("User ID:", userId);
var wahab = {
    name: "Wahab",
    id: 1,
};
wahab = { username: "admin", id: "admin123" };
// wahab = { name: "Wahab", username: "admin", id: 1 }; // Error: Type '{ name: string; username: string; id: number; }' is not assignable to type 'User | Admin'. Object literal may only specify known properties, and 'name' does not exist in type 'Admin'.
console.log("Wahab:", wahab);
function getUserAge(age) {
    return "User age is ".concat(age);
}
console.log(getUserAge(30));
console.log(getUserAge("30"));
