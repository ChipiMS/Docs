// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var mongojs = require('mongojs');            // mongojs for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/html/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
	// api ---------------------------------------------------------------------
	

// application -------------------------------------------------------------
/*
app.get("/language/",function(req, res){
  res.sendfile(__dirname + '/public/html/home.html');
});
app.get("/language/solutions",function(req, res){
  res.sendfile(__dirname + '/public/html/solutions.html');
});
app.get("/language/products",function(req, res){
  res.sendfile(__dirname + '/public/html/products.html');
});
app.get("/language/docs",function(req, res){
  res.sendfile(__dirname + '/public/html/docs.html');
});
app.get("/language/docs/quickstart",function(req, res){
  res.sendfile(__dirname + '/public/html/quickstart.html');
});
app.get("/language/docs/documentation",function(req, res){
  res.sendfile(__dirname + '/public/html/documentation.html');
});
app.get("/language/docs/resources",function(req, res){
  res.sendfile(__dirname + '/public/html/resources.html');
});
app.get("/language/docs/faq",function(req, res){
  res.sendfile(__dirname + '/public/html/faq.html');
});
app.get("/language/company",function(req, res){
  res.sendfile(__dirname + '/public/html/company.html');
});
app.get("/language/contact",function(req, res){
  res.sendfile(__dirname + '/public/html/contact.html');
});
app.get("/language/security",function(req, res){
  res.sendfile(__dirname + '/public/html/security.html');
});
app.get("/language/blog",function(req, res){
  res.sendfile(__dirname + '/public/html/blog.html');
});
app.get("/language/fin",function(req, res){
  res.sendfile(__dirname + '/public/html/fin.html');
});
app.get("/language/legal",function(req, res){
  res.sendfile(__dirname + '/public/html/legal.html');
});
app.get("/language/status",function(req, res){
  res.sendfile(__dirname + '/public/html/status.html');
});
*/

app.get("/en/",function(req, res){
  res.sendfile(__dirname + '/public/html/home.html');
});
app.get("/en/solutions",function(req, res){
  res.sendfile(__dirname + '/public/html/solutions.html');
});
app.get("/en/products",function(req, res){
  res.sendfile(__dirname + '/public/html/products.html');
});
app.get("/en/docs",function(req, res){
  res.sendfile(__dirname + '/public/html/docs.html');
});
app.get("/en/docs/quickstart",function(req, res){
  res.sendfile(__dirname + '/public/html/quickstart.html');
});
app.get("/en/docs/documentation",function(req, res){
  res.sendfile(__dirname + '/public/html/documentation.html');
});
app.get("/en/docs/resources",function(req, res){
  res.sendfile(__dirname + '/public/html/resources.html');
});
app.get("/en/docs/faq",function(req, res){
  res.sendfile(__dirname + '/public/html/faq.html');
});
app.get("/en/company",function(req, res){
  res.sendfile(__dirname + '/public/html/company.html');
});
app.get("/en/contact",function(req, res){
  res.sendfile(__dirname + '/public/html/contact.html');
});
app.get("/en/security",function(req, res){
  res.sendfile(__dirname + '/public/html/security.html');
});
app.get("/en/blog",function(req, res){
  res.sendfile(__dirname + '/public/html/blog.html');
});
app.get("/en/fin",function(req, res){
  res.sendfile(__dirname + '/public/html/fin.html');
});
app.get("/en/legal",function(req, res){
  res.sendfile(__dirname + '/public/html/legal.html');
});
app.get("/en/status",function(req, res){
  res.sendfile(__dirname + '/public/html/status.html');
});

app.get("/es/",function(req, res){
  res.sendfile(__dirname + '/public/html/home.html');
});
app.get("/es/solutions",function(req, res){
  res.sendfile(__dirname + '/public/html/solutions.html');
});
app.get("/es/products",function(req, res){
  res.sendfile(__dirname + '/public/html/products.html');
});
app.get("/es/docs",function(req, res){
  res.sendfile(__dirname + '/public/html/docs.html');
});
app.get("/es/docs/quickstart",function(req, res){
  res.sendfile(__dirname + '/public/html/quickstart.html');
});
app.get("/es/docs/documentation",function(req, res){
  res.sendfile(__dirname + '/public/html/documentation.html');
});
app.get("/es/docs/resources",function(req, res){
  res.sendfile(__dirname + '/public/html/resources.html');
});
app.get("/es/docs/faq",function(req, res){
  res.sendfile(__dirname + '/public/html/faq.html');
});
app.get("/es/company",function(req, res){
  res.sendfile(__dirname + '/public/html/company.html');
});
app.get("/es/contact",function(req, res){
  res.sendfile(__dirname + '/public/html/contact.html');
});
app.get("/es/security",function(req, res){
  res.sendfile(__dirname + '/public/html/security.html');
});
app.get("/es/blog",function(req, res){
  res.sendfile(__dirname + '/public/html/blog.html');
});
app.get("/es/fin",function(req, res){
  res.sendfile(__dirname + '/public/html/fin.html');
});
app.get("/es/legal",function(req, res){
  res.sendfile(__dirname + '/public/html/legal.html');
});
app.get("/es/status",function(req, res){
  res.sendfile(__dirname + '/public/html/status.html');
});

app.get("/Paybook",function(req, res){
  res.sendfile(__dirname + '/public/html/Paybook.html');
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");