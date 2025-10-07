var person = {
    name: "John",
    age: 30,
    hobbies: ["sports", "cooking"],
    email: "john@example.com",
    isActive: true,
};
function printPersonDetails(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Hobbies:", person.hobbies.join(", "));
    console.log("Email:", person.email);
    console.log("Active:", person.isActive);
}
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "Alice", isPaid: false, email: "alice@example.com" };
createUser(newUser);
printPersonDetails(person);
function createCourse() {
    return { title: "TypeScript Basics", price: 29.99 };
}
