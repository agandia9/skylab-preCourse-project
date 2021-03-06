var express = require('express')
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('data/db.json')
var app = express()
var middlewares = jsonServer.defaults()
var port = process.env.PORT || 3000;

app.use(express.static('public'))
// app.use('/bower_components',  express.static('bower_components'));

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use("/api/students", function(req, res, next) {
	if (req.method === 'PUT') {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(router));
		console.log("custom middlware by @alex...")
	if (req.body) console.log(req.body)
		
	}
	next()

})

// Use default router
server.use('/api/', router)
server.use(app)

server.listen(port, function() {
	console.log('JSON Server is running')
})
