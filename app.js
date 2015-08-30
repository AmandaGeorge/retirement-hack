angular.module("retirementHack", [])
	.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
		$scope.results = [];

		$scope.searchWords = function () {
			var keywords = $scope.keywords.replace(/\s+/, '%20');
			var url = "https://www.googleapis.com/customsearch/v1?cx=002024384976429766137:lw0vcl3ockg&q=" + keywords + "&num=10&key=AIzaSyDYIMs_cxxV7aq4JFbr6_cOvzS3eV_F1rk";
			$http.get(url)
				.then(function (response) {
					console.log(response.data.items);
					$scope.keywords = '';
					$scope.results = response.data.items;
					// result.title
					// result.link

				});
		};
	}])

	// https://www.googleapis.com/customsearch/v1?cx=002024384976429766137:lw0vcl3ockg&q=retire%20early&num=10&key=AIzaSyDYIMs_cxxV7aq4JFbr6_cOvzS3eV_F1rk