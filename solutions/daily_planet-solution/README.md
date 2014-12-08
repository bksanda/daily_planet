# Making Headlines
## Intro to Express

### Background


<img src="http://blogs.smithsonianmag.com/design/files/2013/06/first-daily-planet1.jpg">

Welcome to the daily planet, we need your superhuman developer skills to help us share news with the world. We've seen that you have some express knowledge and need you to make us a mock website as soon as possible.

You'll need to use an array of `articles` to create and display articles.

add `var articles = []` near the top of your project.

## Routes

You'll need the following `article` routes:

* `get` `/articles` to display a summary  each article.
* `get` `/articles/new` to get a form to save a new article
* `post` `/articles` to save an article
* `get` `/articles/:id` to find an article by id in the array of `articles` and display it.

**Bonus** You'll need the following `site` related routes:

* `get` `/` serve the homepage of your site.
* `get` `/about` serve a static about daily planet page.
* `get` `/contact` serve a static `contact` page.

## Structure

All your article related views should be in an `views/articles` folder. Each article should utilize `ejs` to render the page. Your `site` related views `index`, `about`, and `contact` can also have a folder `views/site` you just need to `res.render('site/about')`. 


## Bonus

Include some navigation links to help the user navigate the site.
