//Sunny Weather IF/ELSE

var usersWeather = confirm("Is it sunny outside?")
var isSunny = usersWeather;

if (isSunny) {
    alert("Don't forget your sunscreen!");
} else {
    alert("There is no need for sunscreen.");
}

//Traffic Light IF/ELSE

var usersLight = prompt("What color is your traffic light?")
var light = usersLight.toLowerCase();

if (light === "green") {
    alert("GO!");
} else if (light === "yellow") {
    alert("SLOW DOWN!");
} else if (light === "red") {
    alert("STOP!");
} else {
    alert("LIGHT INOPERATIVE");
}

//Sunny Weather IF/ELSE before TERNARY

var usersWeather = confirm("Is it sunny outside?")
var isSunny = usersWeather;

if (isSunny) {
    alert("It's sunny outside.");
} else {
    alert("It's not sunny outside.");
}

//Sunny Weather after TERNARY

var usersWeather = confirm("Is it sunny outside?")
var isSunny = usersWeather;

(isSunny) ? alert("It's sunny outside.") : alert("It's not sunny outside.");

//Traffic Light refactored as a SWITCH statement

var usersLight = prompt("What color is your traffic light?")
var light = usersLight.toLowerCase();

switch (light) {
    case "green":
        alert("GO!");
        break;
    case "yellow":
        alert("SLOW DOWN!");
        break;
    case "red":
        alert("STOP!");
        break;
    default:
        alert("LIGHT INOPERATIVE");
        break;
}
