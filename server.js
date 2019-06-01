var express = require('express');
var app = express();

const cors = require('cors');
app.use(cors());

app.get('', function(req,res){
    res.send(JSON.stringify()); //NEED OBJECT THERE 
});


var server = app.listen(8081,function(){
    var host = sever.address().address;
    var port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
});
