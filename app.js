/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV =  'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');


// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

// Connect to database

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type, Access-Control-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});
require('./routes')(app);



// Start server
server.listen(8080, '127.0.0.1', function () {
  console.log('Express server listening on 127.0.0.1:8080 ');
});

// Expose app
