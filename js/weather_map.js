"use strict";

var weeklyCards = $("#weeklyCards")
var todayCard = $("#todayCard")

function convertDateTime(unixTime) {
	var millisecond = unixTime * 1000
	var dateObject = new Date(millisecond)
	var options = {weekday: 'long'};
	return dateObject.toLocaleString("en-US", options)
}

function currentCard(data){
	var iconCode = data.current.weather[0].icon;
	var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

	var html = "";
	html += "<div class='card mb-3 p-0'>" +
		"<div class='row'>" +
		"<div>" +
		"<div class='card-header text-center'>" + "Today's Weather" + "</div>" +
		"<div class='card-body text-center'>" +
		"<h5 class='h-5 card-title'>"+ "San Antonio" + "</h5>" +
		"<div>" + "<img id='weeklyWeatherIcon' class='img-fluid' src=" + iconUrl + " alt='Weather icon'>" + "</div>" +
		"<h1 class='h-1 card-text'>" + data.current.temp.toFixed(0) + "<span>" + "&#8457;" + "</span>" + "</h1>" +
		"<div>" + "<span>" + "H:" + "</span>" + data.daily[0].temp.max.toFixed(0) + " " + "<span>" + "L:" + "</span>" + data.daily[0].temp.min.toFixed(0) + "</div>" +
		"<div>" + "You've got some " + data.current.weather[0].description.toLowerCase() + " going on." + "</div>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div>"
	return html
}

function renderWeeklyCards(data){
	var html = "";
	for (var i = 1; i < 5; i++){
		html += "<div class='card mb-3 p-0'>" +
			"<div>" +
			"<div>" +
			"<div class='card-header text-center'>" + convertDateTime(data.daily[i].dt) + "</div>" +
			"<div class='card-body text-center'>" +
			"<h1 class='h-1 card-text'>" + "<img id='weeklyWeatherIcon' class='img-fluid' src=" + "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png" + " alt='Weather icon'>" + "</h1>" +
			"<div>" + "<span>" + "H:" + "</span>" + data.daily[i].temp.max.toFixed(0) + " " + "<span>" + "L:" + "</span>" + data.daily[i].temp.min.toFixed(0) + "</div>" +
			"<div>" + data.daily[i].weather[0].main + "</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>"
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
	weeklyCards.html(renderWeeklyCards(data));
});

mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	zoom: 10,
	center: [-98.4683, 29.5312]
});

var usersCoordinates = [];

$("#submit").click(function (e){
	e.preventDefault();
	var usersSearch = $("#usersAddress").val()
	usersMapMarker(usersSearch, mapBoxKey);
	(geocode(usersSearch, mapBoxKey)).then(function (coordinates){
		usersCoordinates = coordinates
		console.log(usersCoordinates);
		$.get("https://api.openweathermap.org/data/2.5/onecall", {
			appid: openWeatherKey,
			lat: usersCoordinates[1],
			lon: usersCoordinates[0],
			units: "imperial"
		}).done(function(data) {
			console.log(data);
			todayCard.html(currentCard(data));
			weeklyCards.html(renderWeeklyCards(data));
		});
	})
})

function usersMapMarker(search, token){
	geocode(search, token).then(function(results){

		map.flyTo({
			center: results,
			zoom: 15
		});


		var popUp = new mapboxgl.Popup()
			.setHTML("<div>" +
				"<div>" + search + "</div>" +
				"</div>")

		new mapboxgl.Marker()
			.setLngLat(results)
			.setPopup(popUp)
			.addTo(map)
			.togglePopup()

	})
}