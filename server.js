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
	
app.get("/",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/home.html');
});
app.get("/solutions",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/solutions.html');
});
app.get("/products",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/products.html');
});
app.get("/docs",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/docs.html');
});
app.get("/docs/quickstart",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/quickstart.html');
});
app.get("/docs/documentation",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/documentation.html');
});
app.get("/docs/resources",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/resources.html');
});
app.get("/docs/faq",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/faq.html');
});
app.get("/company",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/company.html');
});
app.get("/contact",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/contact.html');
});
app.get("/security",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/security.html');
});
app.get("/blog",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/blog.html');
});
app.get("/fin",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/fin.html');
});
app.get("/legal",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/legal.html');
});
app.get("/status",function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/public/html/status.html');
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");