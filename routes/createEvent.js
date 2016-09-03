var express = require('express');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rahul',
  database : 'session'
});

var router = express.Router();



router.post('/', function  (req,res) {

	console.log(req.body);

   var topic = req.body.topic;
   var time = req.body.time;
   var type  = req.body.type;
   var link = req.body.link;

	var query = "INSERT INTO events( topic, time , type , link) VALUES (' "+ topic+ "', '"+ time + " ',' " + type + "',' "+ link +"')";
    
    //var query1 = "select * from links where short='" +value +"'";
       connection.query( query , function(err, rows) {
  			if (err) throw err;
 
  			console.log(" working ");

			res.render('profile');

	});

	// res.render('home');
})

module.exports= router;