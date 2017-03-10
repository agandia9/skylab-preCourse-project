angular.module('skylabCtrls',[])

.controller('alumniCtrl', function($scope, $http, $window, $rootScope) {
	let url = '/api/students'
	$rootScope.$idToShare = '0'
	$http.get(url)
		.then(({ data }) => {
			$scope.alumni = data
		})

	$scope.update = function(alumn) {
		$rootScope.idToShare = alumn
		//$scope.setProperty($scope.id);
	}

	// $scope.setProperty = function(id) {
	// 	$scope.sharedId = id;
	// 	shareId.setProperty($scope.sharedId);
	// };
})

.controller('alumniDetails', function($scope, $http, $rootScope) {
	//$scope.returnedId = shareId.getProperty()

	let url = '/api/students'
	console.log($rootScope)
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
