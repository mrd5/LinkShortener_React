var http = require('http');
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello world');
	res.end();
}).listen(8080);


const mysql = require('mysql');
var db = mysql.createConnection({
	host: "hercules.cs.uregina.ca",
	user: "mrd085",
	password: "doorboysfart",
	database: "mrd085"
});


db.connect(function(err){
	if (err){
		console.error("error connecting: " + err.stack);
		return;
	}
});