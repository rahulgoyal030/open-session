var express = require('express');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rahul',
  database : 'session'
});

var router = express.Router();



router.get('/', function  (req,res) {

	console.log(req.body);

   var userid = req.query.userid;
   var  eventid = req.query.eventid;
   

	var query = "INSERT INTO register( userid , eventid ) VALUES (' "+ userid + "', '"+ eventid +"')";
    
    //var query1 = "select * from links where short='" +value +"'";
       connection.query( query , function(err, rows) {
  			if (err) throw err;
 
  			

  			res.send(" succesful ");
			//res.redirect('/home');  			

	});

	// res.render('home');
})

module.exports= router;