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

	console.log(req.url);

	var query1 = "select * from events limit 10";
    connection.query( query1 , function(err, rows) {
  		if (err) throw err;
          
  		var len = Object.keys(rows).length;

  		if(len>0)
  		{
  			console.log(" hahhahaha");
  			res.send(rows);
  		}
  		

	});
	

	//res.render('event');
})

module.exports= router;