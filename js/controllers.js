var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope) {
	$scope.studySessions = [{ num: 1, desc: 'Methods' }, { num: 2, desc: 'Objects' }, { num: 3, desc: 'Functions' }]
	$scope.alumni = [{
		id: 01,
		name: 'Lorem',
		experienceProgramming: false,
		lastWork: '',
		codeAcamedy: false,
		coderByte: true,
		tracing: 'ok',
		beatles: 'enter'
	}, {
		id: 02,
		name: 'ipsum',
		experienceProgramming: true,
		lastWork: '',
		codeAcamedy: true,
		coderByte: false,
		tracing: 'ok',
		beatles: 'no pass'
	}, {
		id: 03,
		name: 'dolor',
		experienceProgramming: false,
		lastWork: '',
		codeAcamedy: true,
		coderByte: false,
		tracing: 'ok',
		beatles: 'pending'
	}, {
		id: 04,
		name: 'sit amet',
		experienceProgramming: true,
		lastWork: '',
		codeAcamedy: true,
		coderByte: true,
		tracing: 'moreok',
		beatles: 'pending'
	},{
		id: 05,
		name: 'Optimus',
		experienceProgramming: true,
		lastWork: '',
		codeAcamedy: true,
		coderByte: false,
		tracing: 'ok',
		beatles: 'enter'
	}
	]

})

