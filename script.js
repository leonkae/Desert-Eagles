console.log("Hello, World!");
// alert("Eddie is awesome!");

let myName = "Eddie";
myName = "Eddie the Great" + " the Magnificent";
console.log(myName);

let myAge = 24;

console.log(`Andre is ${myAge} years old. and he is ${myName}.`);
let a  = 5;
let b = 10;
function functionName(a,b) {
    return a + b;
}
console.log(`The sum of ${a} and ${b} is ${functionName(a, b)}.`);
console.log(functionName(a, b));

functionName(a,b);

function ticketChecker(age) {
    if (age < 18) {
        console.log("You are not allowed to buy a ticket.");
    }
}

ticketChecker(17);