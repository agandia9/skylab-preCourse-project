var express = require('express')
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('data/db.json')
var app = express()
var middlewares = jsonServer.defaults()

app.use(express.static('public'))

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use("/api/students", function(req, res, next) {
	if (req.method === 'PUT') {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(router));
	}
	next()
})

// Use default router
server.use('/api/', router)
server.use(app)

server.listen(8080, function() {
	console.log('JSON Server is running')
})
