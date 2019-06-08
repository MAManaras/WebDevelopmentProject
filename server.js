var express = require('express');
var app = express();


app.use(express.static('testhtml.html'));



const cors = require('cors');
app.use(cors());

app.get('/books/:', function(req,res){
    //res.send(JSON.stringify()); //NEED OBJECT THERE 
	    var mysql      = require('mysql');
		var connection = mysql.createConnection({
		  host     : '34.90.92.187',
		  user     : 'root',
		  password : 'VeM4n8mVWhAy ',
		  database : 'books'
		});
		 
		connection.connect();
		 
		connection.query('select * from contacts', function (error, results, fields) {
		  if (error) throw error;
		  console.log(JSON.stringify(results));
		  res.send(JSON.stringify(results));
		});
		 
		connection.end();
});

                                                              
var server = app.listen(8081,function(){                                                    
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Starting on http://${host}:${port}`);
});

app.post('/books/',function(req,res){

	res.send("Insert was made successfully");
})	

    var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  acquireTimeout: 30000,
	  host     : '34.90.92.187',
	  user     : 'it21737',
	  password : 'qwerty123',
	  database: 'books',
	});
	 
	connection.connect();
	 
	connection.query('select * from books', function (error, results, fields) {
	  //if (error) throw error;
	  console.log(error);
	  // console.log(JSON.stringify(results));
	  // res.send(JSON.stringify(results));
	});
	 
	// connection.end();


