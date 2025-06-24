// console.log("Hello, World!");
// // alert("Eddie is awesome!");

// let myName = "Eddie";
// myName = "Eddie the Great" + " the Magnificent";
// console.log(myName);

// let myAge = 24;

// console.log(`Andre is ${myAge} years old. and he is ${myName}.`);

// let a  = 5;
// let b = 10;
// // known unknowns

// function functionName(a,b) {
//     return a + b;
// }
// console.log(`The sum of ${a} and ${b} is ${functionName(a, b)}.`);
// console.log(functionName(a, b));

// functionName(a,b);

// console.log("Alive");

function ticketChecker(age) {
  const messageDiv = document.getElementById("message");

  switch (true) {
    case age < 13:
      messageDiv.textContent = "You are a child. go and do your homework!";
      break;

    case age >= 13 && age < 18:
      messageDiv.textContent = "Enda Uoge ulale. !🐶!";
      break;

    case age >= 18 && age < 21:
      messageDiv.textContent =
        "Welcome to the party! 🎉 ! but your admission expires @ 9pm";
      break;

    case age >= 21 && age < 65:
      messageDiv.textContent = "Welcome to the party! 🎉 !";
      break;

    case age >= 65:
      messageDiv.textContent =
        "Welcome to the party! 🎉 ! but you get a free drink! + a cup of tea";
      break;

    default:
      messageDiv.textContent = "Please enter a valid age.";
  }
}

document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const age = parseInt(document.getElementById("age").value);
  console.log(`Age entered: ${age}`);
  ticketChecker(age);
});
