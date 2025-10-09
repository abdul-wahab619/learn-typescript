const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
function identityFour<T>(val: T): T {
  return val;
}

// difference between generics and any

// Generics provide a way to create reusable components that can work with any data type while maintaining type safety. They allow you to define a placeholder type that can be replaced with a specific type when the component is used.

// Any, on the other hand, is a type that can hold any value without type checking. When you use any, you lose the benefits of type safety, as it allows you to assign values of any type to a variable without restrictions.

identityFour<string>("hello");
identityFour<number>(3);
identityFour<boolean>(true);

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U extends { name: string }>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { name: "ali" });
anotherFunction("3", { name: "ali" });
// anotherFunction("3", { age: 30 }); // Error because U must have a name property

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }

  getCart(): T[] {
    return this.cart;
  }
}

const sellable = new Sellable<Quiz | Course>();
sellable.addToCart({ name: "quiz1", type: "quiz" });
sellable.addToCart({ name: "course1", author: "ali", subject: "math" });

console.log(sellable.getCart());