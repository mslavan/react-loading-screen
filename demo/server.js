var webpack 			 = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var { Server } 			 = require('http');
var express 			 = require('express')
var path 				 = require('path')

const port   = process.env.PORT || 3000;
const app 	 = express()
const server = Server(app)

var webpackConfig  = require('../webpack-demo.config.js');
var compiler 	   = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("*", function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
})

server.listen(port,function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port )
  }
})