(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];




function lunchCheckController($scope) {

$scope.lunchList = ""; 
$scope.lunchMessage = "";

$scope.lunchCheck = function () {

	if($scope.lunchList != "") {
	
	//var itemCount = $scope.lunchList.split(",").length;

	var itemCount = ($scope.lunchList.split(",").filter(function(entry) { return entry.trim() != ''; })).length;

		if(itemCount > 3) {

			$scope.lunchMessage = "Too much!";

		} else {

			$scope.lunchMessage = "Enjoy!";
		}

	} else {

		$scope.lunchMessage = "Please enter data first.";
	}


};

};





})();
