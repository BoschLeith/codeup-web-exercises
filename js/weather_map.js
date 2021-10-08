"use strict";

var weeklyCards = $("#weeklyCards")
var todayCard = $("#todayCard")

function convertDateTime(unixTime) {
	var millisecond = unixTime * 1000
	var dateObject = new Date(millisecond)
	var options = {weekday: 'long'};
	return dateObject.toLocaleString("en-US", options)
}

function renderCards(data, mapData){
	var html = "";
	for (var i = 0; i <= 4; i++){
		if (i === 0){
			html += "<div class='card mb-3 p-0'>" +
				"<div class='row'>" +
				"<div>" +
				"<div class='card-header text-center bg-secondary text-white'>" + "Today's Weather" + "</div>" +
				"<div class='card-body text-center'>" +
				"<h5 class='h-5 card-title'>"+ mapData.features[0].place_name + "</h5>" +
				"<h1 class='h-1 card-text'>" + "<img id='weeklyWeatherIcon' class='img-fluid' src=" + "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png" + " alt='Weather icon'>" + "</h1>" +
				"<h1 class='h-1 card-text'>" + data.current.temp.toFixed(0) + "<span>" + "&#8457;" + "</span>" + "</h1>" +
				"<div>" + "<span>" + "H:" + "</span>" + data.daily[i].temp.max.toFixed(0) + " " + "<span>" + "L:" + "</span>" + data.daily[i].temp.min.toFixed(0) + "</div>" +
				"<div>" + "You've got some " + data.daily[i].weather[0].description.toLowerCase() + " going on." + "</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>"
			todayCard.html(html)
			html = "";
		} else {

			html += "<div class='card mb-3 p-0'>" +
				"<div>" +
				"<div>" +
				"<div class='card-header text-center bg-secondary text-white'>" + convertDateTime(data.daily[i].dt) + "</div>" +
				"<div class='card-body text-center'>" +
				"<h1 class='h-1 card-text'>" + "<img id='weeklyWeatherIcon' class='img-fluid' src=" + "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png" + " alt='Weather icon'>" + "</h1>" +
				"<div>" + "<span>" + "H:" + "</span>" + data.daily[i].temp.max.toFixed(0) + " " + "<span>" + "L:" + "</span>" + data.daily[i].temp.min.toFixed(0) + "</div>" +
				"<div>" + data.daily[i].weather[0].main + "</div>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"</div>"
			weeklyCards.html(html)
		}

	}
}
geocode("San Antonio, TX", mapBoxKey).then(function (mapData){
	$.get("https://api.openweathermap.org/data/2.5/onecall", {
		appid: openWeatherKey,
		lat: 29.4246,
		lon: -98.4951,
		units: "imperial"
	}).done(function(data) {
		renderCards(data, mapData);
	});
})

mapboxgl.accessToken = mapBoxKey;

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	zoom: 10,
	center: [-98.4951, 29.4246]
});

var usersCoordinates = [];

$("#submit").click(function (e){
	e.preventDefault();
	var usersSearch = $("#usersAddress").val()
	usersMapMarker(usersSearch, mapBoxKey);
	(geocode(usersSearch, mapBoxKey)).then(function (mapData){
		console.log(mapData);
		usersCoordinates = mapData
		console.log(usersCoordinates);
		$.get("https://api.openweathermap.org/data/2.5/onecall", {
			appid: openWeatherKey,
			lat: usersCoordinates.features[0].center[1],
			lon: usersCoordinates.features[0].center[0],
			units: "imperial"
		}).done(function(data) {
			console.log(data);
			renderCards(data, mapData);
		});
	})
})

function usersMapMarker(search, token){
	geocode(search, token).then(function(results){

		map.flyTo({
			center: results.features[0].center,
			zoom: 15
		});

		new mapboxgl.Marker()
			.setLngLat(results.features[0].center)
			.addTo(map)
	})
}