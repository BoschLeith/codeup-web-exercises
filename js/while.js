"use strict";

//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
//...
// 32768
// 65536

// var i = 1
//
// while (i < 65536) {
//     i = i * 2;
//     console.log(i);
// }

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

function conesMade(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

var totalCones = conesMade(50, 100);
var totalConesForSale = totalCones

console.log("You have a total of " + totalCones + " to sell today.");

function conesLeft() {
    return totalCones - conesBought;
}

do {
var conesBought = Math.floor(Math.random() * 5) + 1;
var conesSold = totalConesForSale - conesLeft();
console.log("Customer bought " + conesBought + " cones.")
console.log("You still have " + conesLeft() + " cones left for sale.");
totalCones = conesLeft();
console.log("You've sold a total of " + conesSold + " cones so far today.");
    if (conesLeft() <= 0) {
        console.log("I can not sell you " + conesBought + " cones because I only have " + totalCones + " left. Sorry.")
        console.log("Yay! You sold all the cones!");
        console.log("You sold " + conesSold + " cones today. Great job!");
        break;
    }
} while (totalCones >= 0 || conesBought < conesLeft());