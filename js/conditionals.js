"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(color) {

    if (color === "blue") {
        return ("Blue is the color of the ocean.");
    } else if (color === "red") {
        return ("Red is the color of strawberries.");
    } else if (color === "orange") {
        return ("Orange is the color of oranges.");
    } else if (color === "yellow") {
        return ("Yellow is the color of the sun.");
    } else if (color === "green") {
        return ("Green is the color of grass.");
    } else if (color === "indigo") {
        return ("Indigo is the color of blueberries?");
    } else if (color === "violet") {
        return ("Violet is the color of wisteria.");
    } else {
        return ("I don't know anything about " + color + ".");
    }
}

console.log(analyzeColor("black"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case "blue":
        console.log("Blue is the color of the ocean.");
        break;
    case "red":
        console.log("Red is the color of strawberries.");
        break;
    case "orange":
        console.log("Orange is the color of oranges.");
        break;
    case "yellow":
        console.log("Yellow is the color of the sun.");
        break;
    case "green":
        console.log("Green is the color of grass.");
        break;
    case "indigo":
        console.log("Indigo is the color of blueberries?");
        break;
    case "violet":
        console.log("Violet is the color of wisteria.");
        break;
    default:
        console.log("I don't know anything about " + randomColor + ".");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var usersColor = prompt("Name a color.").toLowerCase();
//
// switch (usersColor) {
//     case "blue":
//         alert("Blue is the color of the ocean.");
//         break;
//     case "red":
//         alert("Red is the color of strawberries.");
//         break;
//     case "orange":
//         alert("Orange is the color of oranges.");
//         break;
//     case "yellow":
//         alert("Yellow is the color of the sun.");
//         break;
//     case "green":
//         alert("Green is the color of grass.");
//         break;
//     case "indigo":
//         alert("Indigo is the color of blueberries?");
//         break;
//     case "violet":
//         alert("Violet is the color of wisteria.");
//         break;
//     default:
//         alert("I don't know anything about " + usersColor + ".");
//         break;
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(x, y) {
//     if (x === 0) {
//         return console.log("Your lucky number is " + x + ". You receive no discount. Your total is " + y + ".");
//     } else if (x === 1) {
//         return console.log("Your lucky number is " + x + ". You receive a 10% discount. Your total is " + (y - (y * .1)) + ".");
//     } else if (x === 2) {
//         return console.log("Your lucky number is " + x + ". You receive a 25% discount. Your total is " + (y - (y * .25)) + ".");
//     } else if (x === 3) {
//         return console.log("Your lucky number is " + x + ". You receive a 35% discount. Your total is " + (y - (y * .35)) + ".");
//     } else if (x === 4) {
//         return console.log("Your lucky number is " + x + ". You receive a 50% discount. Your total is " + (y - (y * .50)) + ".");
//     } else if (x === 5) {
//         return console.log("Your lucky number is " + x + ". You receive a 100% discount. It's free!");
//     } else {
//         return console.log("Not a winner :(");
//     }
// }
    if (x === 0) {
        return console.log(x);
    } else if (x === 1) {
        return (y - (y * .10));
    } else if (x === 2) {
        return (y - (y * .25));
    } else if (x === 3) {
        return (y - (y * .35));
    } else if (x === 4) {
        return (y - (y * .50));
    } else {
        return console.log("It's free!");
    }
}

console.log(calculateTotal(3, 10));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var usersTotal = prompt("What is your total bill?")

var newTotal = calculateTotal(luckyNumber, usersTotal);

if (luckyNumber > 0 && luckyNumber < 5) {
    alert("Your lucky number is " + luckyNumber + ". Your bill was $" + usersTotal + ". Your new total is $" + newTotal + ".");
} else if (luckyNumber === 5) {
    alert("Your lucky number is " + luckyNumber + ". Your bill was $" + usersTotal + ". Now it's free!");
} else {
    alert("Your lucky number is " + luckyNumber + ". You're not a winner. Your total is $" + usersTotal);
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var usersConfirmation = confirm("Would you like to enter a number?");

function isEven(x) {
    return x % 2 === 0;
}

function plusHundred(x) {
    return x + 100;
}

function isPositive(x) {
    return x >= 1;
}

if (usersConfirmation) {
 var userInput = prompt("Input a number");
    userInput = parseInt(userInput);
     if (isNaN(userInput)) {
        alert("That is not a number. Have a nice day.");
    } else {
         if (isEven(userInput)) {
             alert("Your number is even.");
         } else {
             alert("Your number is odd.");
         }
         alert(userInput + " + 100 = " + plusHundred(userInput));
         if (isPositive(userInput)) {
             alert("Your number is positive.");
         } else {
             alert("Your number is negative.");
         }
     }
} else {
    alert("Okay, have a nice day!")
}