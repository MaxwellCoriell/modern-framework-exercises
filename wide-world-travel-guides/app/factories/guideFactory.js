"use strict";

app.factory("GuideStorage", function($q, $http) {

	let loadGuides = () => {
		return $q (function(resolve, reject) {
			$http.get('../../data/guides.json')
			.then(function(guides) {
				resolve(guides);
			})
			.then(function(error) {
				console.log(error);
			});
		});
	};
	return  {loadGuides};
});