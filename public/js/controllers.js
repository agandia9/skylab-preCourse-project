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
		info.comments.push({
				comment: info.comment,
				day: Date.now()
			})
		delete info.comment
		console.log(info)
		$http.put(url + '/' + num, info)
	}
})

.controller('createAlumn', function($scope, $http) {
	$scope.title = "Create new student"
	let url = '/api/students'
	$scope.createAlumn = function(name, promo, telf, experienceProgramming, lastWork, codeAcademy, coderByte, beatles, comment) {
		var newAlumn = {
			name: $scope.name,
			promo: parseInt($scope.promo),
			telf: $scope.telf,
			experienceProgramming: $scope.experienceProgramming,
			lastWork: $scope.lastWork,
			codeAcademy: $scope.codeAcademy,
			coderByte: $scope.coderByte,
			beatles: $scope.beatles,
			comments: [{
				comment: $scope.comment,
				day: Date.now()
			}]
		}
		console.log(newAlumn)
		$http.post(url, newAlumn)
	}

})
