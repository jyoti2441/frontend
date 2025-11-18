
let userName = prompt("What is your name?");
alert("Welcome, " + userName + "!");
document.write("<h2>Hello " + userName + "! Glad to have you here.</h2>");


// Task 13: Eligibility Checker
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("You are eligible to vote!");
  document.write("<p>You are eligible to vote!</p>");
} else {
  alert("You are not eligible yet.");
  document.write("<p>You are not eligible yet. Come back when you are 18!</p>");
}

