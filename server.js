var express = require('express');
var mongoose = require('mongoose');                    
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override'); 

mongoose.connect('mongodb://localhost:27017/platform_db'); 

var app = express();

app.use(bodyParser.urlencoded({extended:true}));            
app.use(bodyParser.json());                                     
app.use(methodOverride());
app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));

app.set('*', function(req, res){
    res.render('index.html');
});


var port = process.env.PORT || 3000;
app.listen(port);

console.log('Listen on port '+port+'...');
