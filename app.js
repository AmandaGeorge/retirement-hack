angular.module("retirementHack", [])
	.controller("MainCtrl", ["$scope", function ($scope) {
		$scope.results = {};
	}])

// "https://www.googleapis.com/customsearch/v1?cx=002024384976429766137:lw0vcl3ockg&q=" + $scope.term + "&num=10&key=AIzaSyDYIMs_cxxV7aq4JFbr6_cOvzS3eV_F1rk"