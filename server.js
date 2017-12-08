var express = require("express");

var session = require('express-session');
var app = express(); //after requeire 


app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.use(session({secret: 'hello'}));

// root route=================================
//get---change your URL 
app.get('/', function(request, response) {

  

  request.session.count +=1;
  response.render("index", {counter: request.session.count});
})




app.listen(8000, function() {
  console.log("listening on port 8000");
})