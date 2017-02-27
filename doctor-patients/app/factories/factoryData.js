"use strict";

app.factory('DataFactory', function($q, $http, firebaseCreds) {
	let getDocData = () => {
		return $q((resolve, reject) => {
			console.log("blah: ", `${firebaseCreds.databaseURL}/doctors.json`);
			$http.get(`${firebaseCreds.databaseURL}/.json`)
			.then(function (dataObject) {
				resolve(dataObject);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getPatData = (routeParams) => {
		return $q((resolve, reject) => {
			console.log("patients by doctor: ", `${firebaseCreds.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${routeParams}"`);
			$http.get(`${firebaseCreds.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${routeParams}"`)
			.then(function (dataObject) {
				resolve(dataObject);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getDocData, getPatData};
});