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