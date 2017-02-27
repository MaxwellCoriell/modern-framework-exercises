"use strict";

console.log("patCtrl.js is loaded");

app.controller('patCtrl', function($scope, DataFactory, $routeParams){
	
	$scope.routeParams = $routeParams.lastName;
	var routParams = $routeParams.lastName.toLowerCase();

	DataFactory.getPatData(routParams)
	.then( (object) => {
		let patients = object.data;
		let patientArray = [];
		for (var patient in patients) {
			let newObject = {};
			newObject.firstName = patients[patient].first_name;
			newObject.lastName = patients[patient].last_name;
			newObject.ailment = patients[patient].ailment;
			patientArray.push(newObject);
		}
		$scope.patients = patientArray;
	});
});