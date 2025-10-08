let userId: string | number;
userId = "123";
userId = 123;
// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
console.log("User ID:", userId);

type User = {
  name: string;
  id: string | number;
};
type Admin = {
  username: string;
  id: string | number;
};

let wahab: User | Admin = {
  name: "Wahab",
  id: 1,
};

wahab = {username: "admin", id: "admin123"};
// wahab = { name: "Wahab", username: "admin", id: 1 }; // Error: Type '{ name: string; username: string; id: number; }' is not assignable to type 'User | Admin'. Object literal may only specify known properties, and 'name' does not exist in type 'Admin'.
console.log("Wahab:", wahab);

function getUserAge(age: number | string): string {
  return `User age is ${age}`;
}
console.log(getUserAge(30));
console.log(getUserAge("30"));
// console.log(getUserAge(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

export {};
