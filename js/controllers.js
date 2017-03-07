var app = angular.module('skylabApp')

app.controller('alumniCtrl', function($scope) {
	$scope.studySessions = [{ num: 1, desc: 'Methods' }, { num: 2, desc: 'Objects' }, { num: 3, desc: 'Functions' }]
	const url = '/api/Todos'
    // const insertToDom = html => $('ul').html(html)
    // $.ajax({ url })
    //     .then( data =>
    //       data
    //         .map( task => `
    //           <li ${task.done ? "class=done" : ""}>${task.todo}</li>
    //         `)
    //         .join('')
    //     )
    //     .then( insertToDom )

    var getGames = function(gameTitle) {
			return $http.post('http://localhost:9000/api/Todo' )
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}

})

