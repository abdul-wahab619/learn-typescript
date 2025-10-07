type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

type UserProfile = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  address?: string; // Optional property
};
let currentUser: User = {
  name: "John",
  age: 30,
  email: "john@example.com",
  isActive: true,
};

let userProfile: UserProfile = {
  name: "Jane",
  age: 25,
  email: "jane@example.com",
  isActive: false,
};

function getUserInfo(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Active: ${user.isActive}`;
}
function getUserProfile(user: UserProfile): string {
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Active: ${
    user.isActive
  }, Address: ${user.address ?? "N/A"}`;
}

console.log(getUserInfo(currentUser));
console.log(getUserProfile(userProfile));
// console.log(currentUser?.rollno); // Error: Property 'rollno' does not exist on type 'User'.

export {};
