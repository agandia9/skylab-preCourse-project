var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope, $http) {
	$scope.alumni = function getStudents() {
		const url = '/api/students'
		console.log('hey')
		return $http.post(url)
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
})
