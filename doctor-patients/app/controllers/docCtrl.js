"use strict";

console.log("docCtrl.js is loaded");

app.controller('docCtrl', function($scope, DataFactory) {
	DataFactory.getDocData()
	.then( (data) => {
		console.log("data: ", data);
		let dataSet = data.data.doctors;
		let docArray = [];
		for (var doctors in dataSet) {
			let newObject = {};
			newObject.key = Object.keys(dataSet[doctors]);
			newObject.firstName = dataSet[doctors][newObject.key].first_name;
			newObject.lastName = dataSet[doctors][newObject.key].last_name;
			newObject.speciality = dataSet[doctors][newObject.key].speciality;
			docArray.push(newObject);
		}
		$scope.doctors = docArray;
	});
});
	
