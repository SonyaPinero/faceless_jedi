'use strict';
var express = require("express");
var server = express();
var path = require('path');

server.use('/', express.static(path.join(__dirname, 'views')));

server.get('/', function(req, res){
  res.render('index');
});

server.listen(3000);

var jedi = require('./node/reddit.js');
jedi.serverSetup(server);
