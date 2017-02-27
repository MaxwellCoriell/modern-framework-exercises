"use strict";

console.log("I exist as app.js");

var app = angular.module("doctorApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/doctors', {
    templateUrl: "partials/docPartl.html",
    controller: "docCtrl"
  }).
  when('/patients/:lastName', {
  	templateUrl: "partials/patPartl.html",
  	controller: "patCtrl"
  }).
  otherwise('/');
});