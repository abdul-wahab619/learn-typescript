function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return { name, email, isPaid };
}

function logInUser(name: string, email: string, isPaid: boolean = false) {
  return { name, email, isPaid };
}

console.log(addTwo(5));
console.log(getUpper("hello"));
console.log(signUpUser("John", "john@example.com", true));
console.log(logInUser("John", "john@example.com"));
