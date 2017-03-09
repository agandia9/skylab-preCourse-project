var app = angular.module('skylabApp')

// app.service('shareId', function() {
// 	var sharedId = '0';
// 	return {
// 		getProperty: function() {
// 			return sharedId;
// 		},
// 		setProperty: function(value) {
// 			sharedId = value;
// 			console.log(sharedId)
// 		}
// 	};
// });

app.controller('alumniCtrl', function($scope, $http, $window, $rootScope) {
	let url = '/api/students'
	$http.get(url)
		.then(({ data }) => {
			$scope.alumni = data
			console.log($scope.alumni)
		})

	$scope.update = function(alumn) {
		$rootScope.id = alumn
		console.log($rootScope.id)
		//$scope.setProperty($scope.id)
		$window.location.href = "/alumn.html";
	}
	

	// $scope.setProperty = function(id) {
	// 	$scope.sharedId = id;
	// 	shareId.setProperty($scope.sharedId);
	// };
})

app.controller('alumniDetails', function($scope, $http, $rootScope) {
	//$scope.returnedId = shareId.getProperty()

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
