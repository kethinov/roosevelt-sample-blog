module.exports = function(app) {
  app.route('/newPost').get(function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'New Post';
    model.content.pageHeader = 'Add New Post';
    res.render('newPost', model);
  });
  app.route('/newPost').post(function(req, res) {
    require('models/addBlogPosts')(req, function (success) {
      res.redirect('/');
    });
  });
};