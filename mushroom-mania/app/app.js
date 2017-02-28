"use strict";

var app = angular.module("mushroomApp", ["ngRoute"]);

app.config( function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "partials/mushroom-cards.html",
		controller: 'mushCtrl'
	})
	.otherwise('/');
});