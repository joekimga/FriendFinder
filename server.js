var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var apiRoutes = require("./routing/apiRouts.js");
// 	/app/routing/apiRouts.js

var app = express();
const PORT = 3000;

app.get("/", function(req,res) {
	res.sendfile(path.join(__dirname, '/app/public/home.html'));
});

app.get("/survey", function(req, res) {
	res.sendfile(path.join(__dirname, '/app/public/survey.html'));
})




// app.get("/api", apiRoutes, )  


app.listen(PORT, function() {
	console.log("listening on ", PORT)
});
