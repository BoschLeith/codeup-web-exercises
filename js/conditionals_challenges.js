/* Which Generation Are You?
 * Try finding your ancestors and offspring with code.
 *
 * Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
 *
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Examples
 * >> generation(2, "f") ➞ "granddaughter"
 * >> generation(-3, "m") ➞ "great grandfather"
 * >> generation(1, "f") ➞ "daughter"
 *
 * Generation	Male	Female
 * -3	great grandfather	great grandmother
 * -2	grandfather	grandmother
 * -1	father	mother
 * 0	me!	me!
 * 1	son	daughter
 * 2	grandson	granddaughter
 * 3	great grandson	great granddaughter
 *
 */

//save function arguments into var

function generation(x, gender) {
    if (x === 0) {
        return console.log("Me!");
    } else if (x === -1 && gender === 'm') {
        return console.log("father")
    } else if (x === -2 && gender === 'm') {
        return console.log("grandfather")
    } else if (x === -3 && gender === 'm') {
        return console.log("great grandfather")
    } else {
        return console.log('Who are you?');
    }
}

generation(-2, 'm');

/* Say "Hello" Say "Bye"
 * Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * >> sayHelloBye("alon", 1) ➞ "Hello Alon"
 * >> sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 * >> sayHelloBye("jose", 0) ➞ "Bye Jose"
 *
 * Notes
 * The name you return must be capitalized.
 */

function sayHelloBye(name, number) {
    var nameCapitalized = name[0].toUpperCase() + name.substr(1);
    if (number === 1) {
        return console.log("Hello " + nameCapitalized);
    } else {
        return console.log("Bye " + nameCapitalized);
    }
}

console.log(sayHelloBye("bosch", 1));

/* Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 *
 * Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
 *
 * Examples
 * >> possibleBonus(3, 7) ➞ true
 * >> possibleBonus(1, 9) ➞ false
 * >> possibleBonus(5, 3) ➞ false
 *
 * Notes
 * You cannot move backward (which is why example #3 doesn't work).
 * If you are already on the same tile, return false, as you would be advancing away.
 * Expect only positive integer inputs.
 */

function possibleBonus(a, b) {
    return (b - a) <= 6 && (b - a) > 0 && a >= 1 && b >=1;
}

console.log(possibleBonus(5, 7));

/* Integer in Range?
 * Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
 *
 * Examples
 * >> intWithinBounds(3, 1, 9) ➞ true
 * >> intWithinBounds(6, 1, 6) ➞ false
 *
 * >> intWithinBounds(4.5, 3, 8) ➞ false
 *
 * Notes
 * The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
 * Bounds will be always given as integers.
 */

function intWithinBounds(n, lower, upper) {
    if (!Number.isInteger(n)) {
        return false;
    } else {
        return n > lower && n < upper;
    }
}

console.log(intWithinBounds(3, 1, 5));

/* Perimeters with a Catch
 * Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 *
 * Use the following formulas:
 *
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 * The catch is you can only use arithmetic or comparison operators, which means:
 *
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * The goal is to write a short, branch-free piece of code.
 *
 * Examples
 * >> perimeter("s", 7) ➞ 28
 * >> perimeter("c", 4) ➞ 25.12
 * >> perimeter("c", 9) ➞ 56.52
 */