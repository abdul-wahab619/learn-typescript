let user: [string, number, boolean] = ["Abdul", 23, true];

console.log(user[0]); // "Abdul"
console.log(user[1]); // 23
console.log(user[2]); // true
// user[3] = "new value"; // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
let person: [string, number?, boolean?] = ["Ali"]; // optional elements
person = ["Ali", 30];
person = ["Ali", 30, true];
// person = ["Ali", 30, true, "extra"]; // Error: Tuple type '[string, number?, boolean?]' of length '3' has no element at index '3'.

let colors: [string, ...string[]] = ["red", "blue", "green"];
colors.push("yellow");
colors.push("purple", "orange");

// Use Case:
// Tuples are great when you need structured data of mixed types, like:
// [statusCode, message]
let response: [number, string] = [200, "OK"];
// [id, name, isAdmin]
let userInfo: [number, string, boolean] = [1, "Alice", true];
// [latitude, longitude]
let location: [number, number] = [40.7128, -74.006];
// [name, age, isActive]
let userStatus: [string, number, boolean] = ["Bob", 25, false];

export {};
