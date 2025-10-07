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

const getHello = (s: string): string => {
  return "Hello " + s;
};

const heros: Array<string> = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

console.log(addTwo(5));
console.log(getUpper("hello"));
console.log(signUpUser("John", "john@example.com", true));
console.log(logInUser("John", "john@example.com"));
console.log(getHello("John"));
console.log(heros);
consoleError("This is an error message");
console.log(handleError("This is a critical error"));
