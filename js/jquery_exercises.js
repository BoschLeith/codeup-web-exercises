"use strict";

// Alerts when the DOM has finished loading
// $(document).ready(function (){
// 	alert("The DOM has finished loading!")
// });

// Alerts the contents of the item1 ID
// var content = $("#item1").html();
// alert(content);

// Adds a border to all elements with the class of .codeup
// $(".codeup").css("border", "1px solid red");

// Changes the font size of all li elements
$("li").css("font-size", "20px");

// Highlights all the h1, p, li elements in individual selectors
// $("h1").css("background-color", "yellow");
// $("p").css("background-color", "yellow");
// $("li").css("background-color", "yellow");

// Highlights all the h1, p, li elements in one selectors
$("h1, p, li").css("background-color", "yellow");

// Alerts the contents of the h1 element
var content = $("h1").html();
alert(content);