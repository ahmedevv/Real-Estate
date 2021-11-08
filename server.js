const express = require('express')
//library to help serve static files
const serveStatic = require('serve-static')
const path = require('path')

//create express app
const app = express()

//middleware to handle serving the app
app.use('/', serveStatic (path.join(__dirname,'/public')))

//serve index by default
app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//create default port to serve the app
const port = process.env. PORT || 5000

//listening
app.listen(port)

//log to note that app is running
console.log('I am listening on' + port);
