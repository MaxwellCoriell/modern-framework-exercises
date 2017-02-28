"use strict";

app.controller('mushCtrl', function($scope, $http) {
	$http.get('../../data/mushrooms.json')
	.then( function(response) {
		var shrooms = response.data.mushrooms;
		console.log("shrooms: ", shrooms);
		var mushArray = [];
		$scope.mushrooms = mushArray;
		for (var i = 0; i < shrooms.length; i++) {
			var newObj = {};
			var tomato = String(Object.keys(shrooms[i]));
			console.log("tomato: ", tomato);
			newObj.name = tomato;
			newObj.edible = shrooms[i][tomato].edible;
			console.log("edible: ", newObj.edible);
			newObj.description = shrooms[i][tomato].description;
			console.log("description: ", newObj.description);
			mushArray.push(newObj);
		}
	});
});