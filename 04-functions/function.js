function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
function logInUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
}
var getHello = function (s) {
    return "Hello " + s;
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
console.log(addTwo(5));
console.log(getUpper("hello"));
console.log(signUpUser("John", "john@example.com", true));
console.log(logInUser("John", "john@example.com"));
console.log(getHello("John"));
console.log(heros);
consoleError("This is an error message");
