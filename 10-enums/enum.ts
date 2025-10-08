enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Right); // 3

enum Status {
  Pending = 1,
  InProgress = 3,
  Completed = 5,
}

console.log(Status.Pending); // 1
console.log(Status.Completed); // 5
console.log(Status[3]); // InProgress

enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let myRole: Roles = Roles.Admin;
console.log(myRole); // "ADMIN"

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

function handleResponse(status: ResponseStatus) {
  if (status === ResponseStatus.Success) {
    console.log("Request successful!");
  } else if (status === ResponseStatus.NotFound) {
    console.log("Resource not found!");
  }
}

handleResponse(ResponseStatus.Success);
handleResponse(ResponseStatus.NotFound);

const enum Color {
  Red,
  Green,
  Blue,
}

let bgColor = Color.Green; // compiled to direct value, no enum object created
console.log(bgColor); // 1