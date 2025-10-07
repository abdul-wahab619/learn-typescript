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
console.log(addTwo(5));
console.log(getUpper("hello"));
console.log(signUpUser("John", "john@example.com", true));
console.log(logInUser("John", "john@example.com"));
