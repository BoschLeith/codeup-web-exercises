//Function Challenges

//Make a function called returnTwo() that returns the number 2 when called
//Test this function with console.log(returnTwo())

function returnTwo() {
    return 2;
}
console.log("Returns the number " +returnTwo());

//Make a function called sayHowdy() which console.logs the string “Howdy!”
//Test this function by directly calling sayHowdy()
//Remember this function does not need a defined return value

function sayHowdy() {
    console.log("Howdy");
}

sayHowdy();

//Make a function called returnName() that returns the string of your name
//Test this function with console.log(returnName())

function returnName() {
    return "Bosch";
}

console.log(returnName());

//Make a function called addThree() which takes in a number input and returns the number plus 3.
//Test this function with console.log(addThree(5))

function addThree(x) {
    return x + 3
}

console.log(addThree(5));

//Make a function called sayString() which returns the string input passed in.
//Test this function with console.log(sayString('codeup'))

function sayString(x) {
    return x
}

console.log(sayString("codeup"));

//Challenge Function Drills

//Write a function called identity(input) that takes in an argument called input and returns that input.

function identity(input) {
    return input
}

console.log(identity("Bosch"));

//Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1,4));

//Write a function called first(input) that returns the first character in the provided string.

function first(str) {
    return str.charAt(0);
}

console.log(first("cat"));

//Write a function called last(input) that returns the last character of a string

function last(str) {
    return str.charAt(str.length-1);
}

console.log(last("dog"));

//Write a function called rest(input) that returns everything but the first character of a string.

function rest(input) {
    return input.substring(1);
}

console.log(rest("Bosch"));

//Write a function called reverse(input) that takes a string and returns it reversed.

function reverse(input) {
    return input.split("").reverse().join("");
}
/*
This function splits the string into an array (.split()),
reverses it (.reverse()),
and then concatenates the array back into a string (.join())
-Bosch
 */
console.log(reverse("Leith"));

//Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.

function isNumeric(input) {
    return !isNaN(input);
}

console.log(isNumeric(5));
console.log(isNumeric('cat'));
console.log(isNumeric('5'));

//Write a function called count(input) that takes in a string and returns the number of characters.

function count(input) {
    return input.length;
}

console.log(count('cat'));
console.log(count('Bosch'));
console.log(count('5'));

//Write a function called add(a, b) that returns the sum of a and b

function add(a,b) {
    return a + b;
}

console.log(add(1, 1));
console.log(add('cats ', 'are the best'));

//Write a function called subtract(a, b) that return the difference between the two inputs.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(2, 1));

//Write multiply(a, b) function that returns the product

function multiply(a, b) {
    return a * b;
}

console.log(multiply(1, 2));

//Write a divide(numerator, denominator) function that returns a divided by b

function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(6, 2));

//Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor

function remainder(number, divisor) {
    return number % divisor;
}

console.log(remainder(5, 2));

//Write the function square(a) that takes in a number and returns the number multiplied by itself.

function square(a) {
    return a * a;
}

console.log(square(2));

//Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

function  sumOfSquares(a, b) {
    return add(square(a), square(b));
}

console.log(sumOfSquares(2, 2));

//Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

function doMath(operator, a, b) {
    return operator(a, b);
}

console.log(doMath(subtract, 10, 5 ));