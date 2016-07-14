module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'Home';
    model.content.pageHeader = 'Home';
    require('models/getBlogPosts')(function (blogPosts) {
      model.blogPosts = blogPosts;
      res.render('homepage', model);
    });
  });
};