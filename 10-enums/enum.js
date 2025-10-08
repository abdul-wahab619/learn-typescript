var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["InProgress"] = 3] = "InProgress";
    Status[Status["Completed"] = 5] = "Completed";
})(Status || (Status = {}));
console.log(Status.Pending); // 1
console.log(Status.Completed); // 5
console.log(Status[3]); // InProgress
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUEST";
})(Roles || (Roles = {}));
var myRole = Roles.Admin;
console.log(myRole); // "ADMIN"
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["ServerError"] = 500] = "ServerError";
})(ResponseStatus || (ResponseStatus = {}));
function handleResponse(status) {
    if (status === ResponseStatus.Success) {
        console.log("Request successful!");
    }
    else if (status === ResponseStatus.NotFound) {
        console.log("Resource not found!");
    }
}
handleResponse(ResponseStatus.Success);
handleResponse(ResponseStatus.NotFound);
var bgColor = 1 /* Color.Green */; // compiled to direct value, no enum object created
console.log(bgColor); // 1
