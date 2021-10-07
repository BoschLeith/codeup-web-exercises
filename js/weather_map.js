"use strict";

var weeklyCards = $("#weeklyCards")
var todayCard = $("#todayCard")

function currentCard(data){
	var iconCode = data.current.weather[0].icon;
	var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

	var html = "";
	html += "<div class='card mb-3 p-0'>" +
		"<div class='row'>" +
		"<div class='col-4'>" + "<img id='weeklyWeatherIcon' class='img-fluid' src=" + iconUrl + " alt='Weather icon'>" + "</div>" +
		"<div class='col-8'>" +
		"<div class='card-header text-center'>" + "Today's Weather" + "</div>" +
		"<div class='card-body text-center'>" +
		"<h5 class='h-5 card-title'>"+ "San Antonio" + "</h5>" +
		"<h1 class='h-1 card-text'>" + data.current.temp.toFixed(0) + "<span>" + "&#8457;" + "</span>" + "</h1>" +
		"<div>" + "<span>" + "H:" + "</span>" + data.daily[0].temp.max.toFixed(0) + " " + "<span>" + "L:" + "</span>" + data.daily[0].temp.min.toFixed(0) + "</div>" +
		"<div>" + "You're currently experiencing " + data.current.weather[0].description.toLowerCase() + "." + "</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>"
	return html
}

function weeklyCard(input){
	var html = "";
	html += "<div class='card mb-3 p-0'>" +
		"<div class='row'>" +
		"<div class='col-4'>" + "<img id='weeklyWeatherIcon' class='img-fluid' src='' alt='Weather icon'>" + "</div>" +
		"<div class='col-8'>" +
		"<div class='card-header text-center'>" + "Today's Weather" + "</div>" +
		"<div class='card-body text-center'>" +
		"<h5 class='h-5 card-title'>"+ "City Name" + "</h5>" +
		"<h1 class='h-1 card-text'>" + "Current Temp" + "</h1>" +
		"<div>" + "High/Low" + "</div>" +
		// "<div>" + "Current Weather Description" + "</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>"
	return html
}

function renderWeeklyCards(){
	var html = "";
	for (var i = 0; i < 4; i++){
		html += weeklyCard();
	}
	return html
}

$.get("https://api.openweathermap.org/data/2.5/onecall", {
	appid: openWeatherKey,
	lat: 29.4246,
	lon: -98.4951,
	units: "imperial"
}).done(function(data) {
	console.log(data);
	todayCard.html(currentCard(data));
	weeklyCards.html(renderWeeklyCards);
});

mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	zoom: 10,
	center: [-98.4683, 29.5312]
});