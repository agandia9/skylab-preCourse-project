angular.module('skylabCtrls', [])

.controller('alumniCtrl', function($scope, $http, $window, $rootScope) {
	let url = '/api/students'
	$rootScope.$idToShare = '0'
	$http.get(url)
		.then(({ data }) => {
			$scope.alumni = data
		})
	$scope.update = function(alumn) {
		$rootScope.idToShare = alumn
	}
})

.controller('alumniDetails', function($scope, $http, $rootScope) {
	let url = '/api/students'
	console.log($rootScope)
	console.log(url + '/' + $rootScope.idToShare)
	$http.get(url + '/' + $rootScope.idToShare)
		.then(({ data }) => {
			$scope.info = data
			console.log(data)
		})

	$scope.updateAlumn = function(info) {
		let num = info.id
		delete info.id
		if (info.comments === true) {
			info.comments = info.comments.split(",")
		} else console.log("no new comments added")
		console.log(info)
		$http.put(url + '/' + num, info)
	}
})

.controller('createAlumn', function($scope, $http) {
	$scope.title = "Create new student"
	let url = '/api/students'
	$scope.createAlumn = function(name, promo, experienceProgramming, lastWork, codeAcademy, coderByte, beatles, comments) {
		var newAlumn = {
			name: $scope.name,
			promo: parseInt($scope.promo),
			experienceProgramming: $scope.experienceProgramming,
			lastWork: $scope.lastWork,
			codeAcademy: $scope.codeAcademy,
			coderByte: $scope.coderByte,
			beatles: $scope.beatles,
			comments: $scope.comments.split(",")
		}
		console.log(newAlumn)
		$http.post(url, newAlumn)
	}

})
