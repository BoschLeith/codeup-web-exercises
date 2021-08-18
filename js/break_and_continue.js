"use strict";

//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// Prompts user for odd number between 1 and 50
var userInput = prompt("Enter an odd number between 1 and 50");
// Converts users input into a number type
var num = parseInt(userInput);

console.log("Number to skip is: " + userInput);

for (var i = 1; i < 50; i++) {
    // IF i is even, do nothing and continue
    if (i % 2 === 0) {
        continue;
    // IF i is equal to the users inputted number, return console log
    } else if (i === num) {
        console.log("Yikes! Skipping number: " + userInput);
    }
    // IF i was odd, return console log
    console.log("Here is an odd number: " + i);
}


