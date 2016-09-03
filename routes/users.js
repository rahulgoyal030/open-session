var express = require('express');

var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rahul',
  database : 'session'
});

var router = express.Router();

router.get('/*', function  (req,res) {

  console.log(req.url);

  var url = req.url;
  var username = url.slice(1);
  console.log(username);
    
    res.render('profile');
  // var query1 = "select * from user where firstname='" +username+"'";
  //   connection.query( query1 , function(err, rows) {
  //     if (err) throw err;
          
                
    
  //     });

  
})

module.exports= router;