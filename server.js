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
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/solutions",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/products",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/docs",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/docs/quickstart",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/docs/documentation",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/docs/resources",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/docs/faq",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/company",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/contact",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/security",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/blog",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/fin",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/legal",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/language/status",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
*/

app.get("/en/",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/solutions",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/products",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/docs",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/docs/quickstart",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/docs/documentation",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/docs/resources",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/docs/faq",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/company",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/contact",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/security",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/blog",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/fin",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/legal",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/en/status",function(req, res){
	res.sendfile(__dirname +'/index.html');
});

app.get("/es/",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/solutions",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/products",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/docs",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/docs/quickstart",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/docs/documentation",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/docs/resources",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/docs/faq",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/company",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/contact",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/security",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/blog",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/fin",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/legal",function(req, res){
	res.sendfile(__dirname +'/index.html');
});
app.get("/es/status",function(req, res){
	res.sendfile(__dirname +'/index.html');
});

app.get("/img/icon.jpeg",function(req, res){
	res.sendfile(__dirname +'/img/icon.jpeg');
});
app.get("/pages/blog.html",function(req, res){
	res.sendfile(__dirname +'/pages/blog.html');
});
app.get("/pages/company.html",function(req, res){
	res.sendfile(__dirname +'/pages/company.html');
});
app.get("/pages/contact.html",function(req, res){
	res.sendfile(__dirname +'/pages/contact.html');
});
app.get("/pages/docs.html",function(req, res){
	res.sendfile(__dirname +'/pages/docs.html');
});
app.get("/pages/documentation.html",function(req, res){
	res.sendfile(__dirname +'/pages/documentation.html');
});
app.get("/pages/faq.html",function(req, res){
	res.sendfile(__dirname +'/pages/faq.html');
});
app.get("/pages/fin.html",function(req, res){
	res.sendfile(__dirname +'/pages/fin.html');
});
app.get("/pages/home.html",function(req, res){
	res.sendfile(__dirname +'/pages/home.html');
});
app.get("/pages/legal.html",function(req, res){
	res.sendfile(__dirname +'/pages/legal.html');
});
app.get("/pages/products.html",function(req, res){
	res.sendfile(__dirname +'/pages/products.html');
});
app.get("/pages/quickstart.html",function(req, res){
	res.sendfile(__dirname +'/pages/quickstart.html');
});
app.get("/pages/resources.html",function(req, res){
	res.sendfile(__dirname +'/pages/resources.html');
});
app.get("/pages/security.html",function(req, res){
	res.sendfile(__dirname +'/pages/security.html');
});
app.get("/pages/solutions.html",function(req, res){
	res.sendfile(__dirname +'/pages/solutions.html');
});
app.get("/pages/status.html",function(req, res){
	res.sendfile(__dirname +'/pages/status.html');
});
app.get("/script.js",function(req, res){
	res.sendfile(__dirname +'/script.js');
});
app.get("/src/css/bigStyle.css",function(req, res){
	res.sendfile(__dirname +'/src/css/bigStyle.css');
});
app.get("/src/css/mediumStyle.css",function(req, res){
	res.sendfile(__dirname +'/src/css/mediumStyle.css');
});
app.get("/src/css/smallStyle.css",function(req, res){
	res.sendfile(__dirname +'/src/css/smallStyle.css');
});
app.get("/src/css/style.css",function(req, res){
	res.sendfile(__dirname +'/src/css/style.css');
});
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");