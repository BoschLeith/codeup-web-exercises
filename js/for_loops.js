"use strict";

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + i * x);
    }
}

console.log(showMultiplicationTable(7)); // Inputs 7 into the function to create multiplication table in the console log

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// Generates random number with a min and max value
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (var i = 0; i <= 10; i++) {
    // Sets random function parameters to generate a random number with a min number of 20 and a max number of 200
    var randomNumber = random(20, 200);
    // Calculates if number is even
    if (randomNumber % 2 === 0) {
        // Console logs if number is even
        console.log(randomNumber + ' is even');
    } else {
        // Console logs if number is odd
        console.log(randomNumber + ' is odd');
    }
}

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// ...
// 999999999

for (var i = 1; i < 10; i++) {
    var num = i.toString(); // Converts var i (number) into string
    console.log(num.repeat(i)); // Repeats string by var i and concatenates them together
}

//Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
//...
// 5

// FOR loop starts at 100, subtracts 5 until it is >= 5
for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}


