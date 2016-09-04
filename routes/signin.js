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
    var pass = req.body.password;

    connection.query("SELECT * FROM user WHERE email=' "+ username + "' and password = ' "+ pass +" ' " ,function(Err, records){
          if(Err) throw Err;
        
          res.render('homePage' ,  { "userId" : username });
});
});

module.exports= router;