var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope, $http) {

	let url = '/api/students'
	$http.get(url)
		.then( ({ data }) => {
			$scope.alumni = data 
			console.log ( $scope.alumni )
		})
	$scope.update = function (alumn){

	delete alumn.id
	console.log(alumn)
	$http.post(url, alumn)
		// .then( ({ data }) => {
		// 	$scope.alumni = data 
		// 	console.log ( $scope.alumni )
		// })
	}

})
