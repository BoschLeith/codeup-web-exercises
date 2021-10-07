"use strict";

$.get("https://api.openweathermap.org/data/2.5/onecall", {
	appid: openWeatherKey,
	lat: 29.42,
	lon: -98.49,
	units: "imperial"
}).done(function(data) {
	console.log(data);
});