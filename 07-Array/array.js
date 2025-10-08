var superHeroes = [];
superHeroes.push("Ironman");
superHeroes.push("Spiderman");
superHeroes.push("Black Panther");
// superHeroes.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(superHeroes);
var heroNames = [];
heroNames.push("Thor");
heroNames.push("Hulk");
// heroNames.push(false); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
console.log(heroNames);
var heroPower = [];
heroPower.push(100);
heroPower.push(200);
// heroPower.push("300"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(heroPower);
var heroPowerMixed = [];
heroPowerMixed.push(100);
heroPowerMixed.push("200");
heroPowerMixed.push(true);
console.log(heroPowerMixed);
var allUsers = [];
allUsers.push({ name: "Alice", isActive: true });
allUsers.push({ name: "Bob", isActive: false });
// allUsers.push({ name: "Charlie", isActive: "yes" }); // Error: Type 'string' is not assignable to type 'boolean'.
console.log(allUsers);
var MLModels = [];
MLModels.push([255, 255, 255]);
MLModels.push([0, 0, 0]);
MLModels.push([128, 128, 128]);
// MLModels.push([255, 255, "255"]); // Error: Type 'string' is not assignable to type 'number'.
console.log(MLModels);
