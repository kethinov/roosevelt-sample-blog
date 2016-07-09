module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = 'Home';
    require('models/getBlogPosts')(req, res, function (blogPosts) {
      model.blogPosts = blogPosts;
      res.render('homepage', model);
    });
  });
};