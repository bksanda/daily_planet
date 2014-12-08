var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
 // tell your app to use the module
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));

// You'll need the following `article` routes:
// * `get` `/articles` (ARTICLES) to display a summary  each article.
// * `get` `/articles/new` (NEW) to get a form to save a new article
// * `post` `/articles` to save an article
// * `get` `/articles/:id` (SHOW) to find an article by id in the array of `articles` and display it.

var articles = [{title:"Weed is Legal", body:"It's about time!"}];

app.get('/articles', function (req, res){
	res.render("articles", {allArticles: articles})
})

app.get('/articles/new', function (req, res){
	res.render("new")
})


app.get('/articles/:id', function (req, res){
	res.render("show", articles[req.params.id])
	//req.params.id
})

app.post('/articles', function (req, res){
	console.log(req.body)
	articles.push(req.body)
	console.log(articles)
	res.render("thanks")
})

app.listen(3000);