const person = {
  name: "John",
  age: 30,
  hobbies: ["sports", "cooking"],
  email: "john@example.com",
  isActive: true,
};

function printPersonDetails(person: {
  name: string;
  age: number;
  hobbies: string[];
  email: string;
  isActive: boolean;
}) {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Hobbies:", person.hobbies.join(", "));
  console.log("Email:", person.email);
  console.log("Active:", person.isActive);
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

let newUser = { name: "Alice", isPaid: false, email: "alice@example.com" };

createUser(newUser);

printPersonDetails(person);

function createCourse(): { title: string; price: number } {
  return { title: "TypeScript Basics", price: 29.99 };
}
