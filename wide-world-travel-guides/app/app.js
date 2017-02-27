"use strict";

var app = angular.module('travelGuideApp', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: "partials/guide-cards.html",
		controller: 'bookCtrl'
	});
});