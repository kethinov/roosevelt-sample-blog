module.exports = function(app) {
  app.route('/newPost').get(function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'New Post';
    model.content.pageHeader = 'Create Post';
    res.render('newPost', model);
  });
  app.route('/newPost').post(function(req, res) {
    require('models/postBlogPost')(req, function (success) {
      res.redirect('/');
    });
  });
};