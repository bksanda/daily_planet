var express = require('express');
var bodyParser = require("body-parser");
var app = express();

// Our faux db
var articles = [
  {title: "This is a book", article: "The quick brown fox jumps over the lazy dog"}
]

// Tell node to use EJS files
app.set("view engine", "ejs");

// Tell node to parse data from POST data
app.use(bodyParser.urlencoded({extended: false}));

// Tell node to serve files from the public folder (ex /style.css)
app.use(express.static(__dirname + "/public"));

// root route
app.get("/", function(req, res) {
  res.render("index")
})

// All articles (index)
app.get("/articles", function(req, res) {
  var locals = {
    thisIsMyLocalGroupOfArticles: articles,
    pageTitle: "This is all of our Articles",
    msg: req.query.msg || ""
  }
  res.render("articles/index", locals);
})

// New Article (new);
app.get("/articles/new", function(req, res) {
  res.render("articles/new");
})

//Create Article (create)
app.post("/articles", function(req, res) {
  var article = req.body
  articles.push(article)
  // articles.push(req.body)
  console.log(articles);
  // res.render("articles/create");
  res.redirect("/articles?msg=Thanks");
})

//Show Article (show)
app.get("/articles/:id", function(req,res) {
  var index = req.params.id
  var article = articles[index]
  // res.send(article);
  res.render("articles/show", article)
})


app.listen(3000);