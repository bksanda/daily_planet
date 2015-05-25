var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//temp db
var articles = [
  {title: "Washington Weed", article: "The Legalization of Marijuana"},
]

//Node use EJS files for template views
app.set('view engine', 'ejs');

//Node to parse date from POST data
app.use(bodyParser.urlencoded({extended: false}));

//Node to servie static files (ex: style.css) from the public folder
app.use(express.static(__dirname + '/public'));

// You'll need the following `article` routes:
// * `get` `/articles` (ARTICLES) to display a summary  each article.
// * `get` `/articles/new` (NEW) to get a form to save a new article
// * `post` `/articles` to save an article
// * `get` `/articles/:id` (SHOW) to find an article by id in the array of `articles` and display it.

//Root Route
app.get('/',function(req,res){
  res.render("index")
})

//All articles (index action -- displays all articles)
app.get('/articles', function(req, res){
  var locals = {
    allArticles: articles,
    pageTitle: "All Articles",
    msg: req.query.msg || ""
  }
	res.render("articles/index", locals);
})

//New article (new action -- returns an HTML form to create a new article )
app.get('/articles/new', function(req, res){
	res.render("articles/new");
})


//Create Article (create action -- creates a new article)
app.post('/articles', function(req,res){
  var article = req.body
  articles.push(article) // this will put the new article into the articles array
  console.log(articles);
  //res.render('articles/create");
  res.redirect('/articles?msg=Thanks for Posting'); // instead of rendering a new create page
})

//app.post('/articles', function (req, res){
//  console.log(req.body)
//  articles.push(req.body)
//  console.log(articles)
//  res.render("thanks")
// })


//Show article (show action -- displays a specific article)
app.get('/articles/:id', function (req, res){
  var index = req.params.id
  var article = articles[index]
  res.render('articles/show', article)
})

//View app on localhost:3000
app.listen(3000);