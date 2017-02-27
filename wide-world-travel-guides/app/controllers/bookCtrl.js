"use strict";

app.controller("bookCtrl", function($scope, GuideStorage) {
	$scope.title = "Let These Books Be Your Guide";

	// $scope.guides = [];
	// console.log("getting guides ");
	
	GuideStorage.loadGuides()
	.then((guides) => {
		$scope.guides = guides.data.guides;
	});

});

