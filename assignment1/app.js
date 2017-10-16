(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController($scope) {

$scope.lunchList = ""; 
$scope.lunchMessage = "";
$scope.setColor = {};
$scope.setBorder = {};

$scope.lunchCheck = function () {

	var switchColor = "green";
	var switchBorder = "4px solid green";

	if($scope.lunchList != "") {

	var itemCount = ($scope.lunchList.split(",").filter(function(entry) { return entry.trim() != ''; })).length;

		if(itemCount > 3) {

			$scope.lunchMessage = "Too much!";

		} else {

			$scope.lunchMessage = "Enjoy!";
		}

	} else {

		$scope.lunchMessage = "Please enter data first.";
		switchColor = "red";
		switchBorder = "4px solid red";
	}

	$scope.setColor.color  =  switchColor ;
	$scope.setBorder.border = switchBorder;
	$scope.lunchList = "";


};

$scope.reset = function() {
	
	$scope.setColor = {};
	$scope.setBorder =  {};
	$scope.lunchMessage = "";

};

};





})();
