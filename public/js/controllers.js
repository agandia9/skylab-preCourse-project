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
	$scope.setAsCaution = function(danger, info){
		if(danger == true){
			console.log("student set as danger")
			$scope.danger = true;
		}
		else{
			$scope.danger = false;
			console.log("student set NO DANGER")
		}
		console.log($scope.danger)
		return danger
	}

	$scope.updateAlumn = function(info) {
		let num = info.id
		console.log($scope.danger)

		if(typeof $scope.danger !== 'undefined'){
		info.caution = $scope.danger 
		}else{
			console.log("not changes in caution")
		}
		delete info.id
		delete $scope.danger
		if (info.comment) {
			info.comments.push({
				comment: info.comment,
				day: Date.now()
			})
		} else {
			console.log('not new comments')
		}
		console.log(info)
		$http.put(url + '/' + num, info).then(
			function() {
				console.log('HEY')
				$('#myModal').modal('show');
			})
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
		$http.post(url, newAlumn).then(
			function() {
				console.log('HEY')
				$('#myModal').modal('show');
			})
	}

})
