var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('kanji'));


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/hello', function(req, res){
	res.send("Hello World!");
});

app.listen(3000);
console.log('Listening on port 3000')