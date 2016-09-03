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

   var first = req.body.firstname;
   var last = req.body.lastname;
   var email  = req.body.email;
   var pass = req.body.password;

	var query = "INSERT INTO user( firstname, lastname , email , password) VALUES (' "+ first + "', '"+ last + " ',' " + email + "',' "+ pass +"')";
    
    //var query1 = "select * from links where short='" +value +"'";
       connection.query( query , function(err, rows) {
  			if (err) throw err;
 
  			console.log(" working ");

			res.render('home');  			

	});

	// res.render('home');
})

module.exports= router;