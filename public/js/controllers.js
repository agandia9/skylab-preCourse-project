var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope, $http, $window, $rootScope) {

	let url = '/api/students'
	$http.get(url)
		.then(({ data }) => {
			$scope.alumni = data
			console.log($scope.alumni)
		})
	$scope.update = function(alumn) {
			$rootScope.id = alumn
			$window.location.href = "/alumn.html";
		}
		// let num = alumn.id
		// delete alumn.id
		// $http.put(url + '/' + alumn)
		// 	.then(({ data }) => {
		// 		$window.location.href = "/alumn.html";
		// 		$scope.info = data
		// 	});
})

app.controller('alumniDetails', function($scope, $http, $rootScope) {
	console.log($rootScope.$id)
	let url = '/api/students'
	console.log(url + '/' + $rootScope.$id)
	$http.get(url + '/' + $rootScope.$id)
		.then(({ data }) => {
			$scope.info = data
			console.log(data)
		})

	$scope.updateAlumn = function(info) {
		let num = info.id
		delete info.id
		console.log(info)
		$http.put(url + '/' + num, info, num)
			// .then( ({ data }) => {
			// 	$scope.alumni = data 
			// 	console.log ( $scope.alumni )
			// })
	}

})
