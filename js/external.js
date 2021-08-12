"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");
//creates welcome alert for user

var favColor = prompt("What's your favorite color?");
//creates favorite color prompt and collect answer as favColor variable


alert("Great, " + favColor + " is my favorite color too!");
//creates alert returning users favColor

//Prompts/Alerts for previous JS exercises

//Prompts/Alerts for Question #3-1

var little = prompt("How long did you rent The Little Mermaid for?");
var bear = prompt("How long did you rent Brother Bear for?");
var hercules = prompt("How long did you rent Hercules for?");
//prompts used to collect days rented

var totalDue = ((little * 3) + (bear * 3) + (hercules * 3));
//variable used to total rental fees

alert("You owe $" + totalDue + " for your movie rentals.");
//alert for user about total rental fees due

//Prompts/Alerts for Question #3-2

var google = 400;
var amazon = 380;
var facebook = 350;
//amount due for each hour of contract work

var googlehrs = prompt("How many hours did you work for Google?");
var amazonhrs = prompt("How many hours did you work for Amazon?");
var facebookhrs = prompt("How many hours did you work for Facebook?");
//prompts used to collect total hours worked

var paymentdue = (googlehrs * google) + (amazonhrs * amazon) + (facebookhrs * facebook);
//variable used to collect total payment due

alert("You are owed $" + paymentdue + " for your contract work.");
//alert for user about payment due