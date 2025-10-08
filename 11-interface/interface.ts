// In TypeScript, an interface defines the structure or shape of an object — specifying what properties and methods it must have. It’s a great way to add type safety and readability to your code.

interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}
let employee: Person = {
  name: "John Doe",
  age: 28,
  isEmployed: true,
};
console.log(employee.name); // "John Doe"
console.log(employee.age); // 28
console.log(employee.isEmployed); // true

interface Product {
  readonly id: number;
  name: string;
  price?: number; // optional
}

const laptop: Product = { id: 1, name: "MacBook" };
// laptop.id = 2; ❌ Error — 'id' is readonly

interface Student {
  name: string;
  rollNo: number;
  greet(): string;
}

const std: Student = {
  name: "Ali",
  rollNo: 101,
  greet: () => "Hello, I’m Ali!",
};

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Wahab",
  email: "wahab@example.com",
  role: "super-admin",
};

interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;
console.log(addNumbers(5, 10)); // 15

export {};
