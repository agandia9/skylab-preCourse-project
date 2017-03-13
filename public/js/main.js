angular.module('skylabApp', ['ngRoute', 'skylabCtrls'])

angular.module('skylabApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'alumniCtrl'
		})
		// route for the details page
		.when('/alumn', {
			templateUrl : 'templates/alumn.html',
			controller  : 'alumniDetails'
		})
		// route for the info page
		.when('/create', {
			templateUrl : 'templates/newUser.html',
			controller  : 'createAlumn'
		})
		.otherwise({redirectTo: '/'}); ;
});

