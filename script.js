// console.log("Hello, World!");
// // alert("Eddie is awesome!");

// let myName = "Eddie";
// myName = "Eddie the Great" + " the Magnificent";
// console.log(myName);

// let myAge = 24;

// console.log(`Andre is ${myAge} years old. and he is ${myName}.`);
// let a  = 5;
// let b = 10;
// function functionName(a,b) {
//     return a + b;
// }
// console.log(`The sum of ${a} and ${b} is ${functionName(a, b)}.`);
// console.log(functionName(a, b));

// functionName(a,b);
console.log("Alive");

function ticketChecker(age) {
  const messageDiv = document.getElementById("message");

  if (age < 18) {
    messageDiv.textContent = "Enda Uoge ulale. !🐶!";
  } else if (age < 21) {
    messageDiv.textContent = "Welcome to the party! 🎉 but leave @ 9pm";
  } else {
    messageDiv.textContent = "Welcome to the party! 🎉 we know how we do past 9pm ";
  }
};

document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const age = parseInt(document.getElementById("age").value);
  console.log(`Age entered: ${age}`);
  ticketChecker(age);
});