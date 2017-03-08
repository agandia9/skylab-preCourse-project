var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope, $http) {

	let url = '/api/students'
	$http.get(url)
		.then( ({ data }) => {
			$scope.alumni = data 
			console.log ( $scope.alumni )
		})
	$scope.update = function (alumn){
	let num = alumn.id
	delete alumn.id
	console.log(alumn)
	$http.put(url+'/'+num, alumn, num)
		// .then( ({ data }) => {
		// 	$scope.alumni = data 
		// 	console.log ( $scope.alumni )
		// })
	}

})
