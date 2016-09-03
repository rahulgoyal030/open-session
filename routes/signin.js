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
	var username = req.body.username;
    var password = req.body.password;

    connection.query("SELECT * FROM user", function(Err, Rows, Fields){
                for(var i=0; i<Rows.length; i++){
                    if(Rows[i].password==password && Rows[i].email==username)
                    {
                    	  res.render('homePage');
                    }
                    else
                    {
                    	//alert("Please enter correct user name and password.")
                    }
                }
            });
});

module.exports= router;