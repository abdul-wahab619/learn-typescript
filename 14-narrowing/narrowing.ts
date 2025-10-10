// Narrowing in TypeScript means refining a broader type (like string | number) into a more specific one (like just string) based on runtime checks.

// Type Guards are expressions that perform these runtime checks to help the TypeScript compiler understand the specific type of a variable within a certain scope.

// Common ways to narrow types include using typeof, instanceof, and in operators.
function detectType(x: string | number) {
  if (typeof x === "string") {
    return x.toLowerCase();
  }
  return x + 3;
}

function provideId(id: string | null) {
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
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

//in operator
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function getInfo(person: Admin | User) {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.email);
  }
}
getInfo({ role: "admin", permissions: ["read", "write"] });

// equality narrowing
function compare(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a.toUpperCase()); // both are strings
  }
}
compare("hello", "hello");

// user-defined type guards
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
