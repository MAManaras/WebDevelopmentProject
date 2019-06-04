var express = require('express');
var app = express();

const cors = require('cors');
app.use(cors());

app.get('/books/:', function(req,res){
    //res.send(JSON.stringify()); //NEED OBJECT THERE 
    res.send("hello");
});

                                                              
var server = app.listen(8081,function(){                                                    
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Starting on http://${host}:${port}`);
});

app.post('/books/',function(req,res){
	res.send()
})	
