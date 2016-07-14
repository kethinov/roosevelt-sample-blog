module.exports = function(app) {
  app.route('/editPost').get(function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'Blog Editor';
    model.content.pageHeader = 'Edit Posts';
    require('models/getBlogPosts')(function (blogPosts) {
      model.blogPosts = blogPosts;
      res.render('editpost', model);
    });
  });
  app.route('/editPost').post(function(req, res) {
    if (!req.body.deleteButton) {
      require('models/editBlogPosts')(req, function (success) {
        res.redirect('/');
      });
    }
    else {
      require('models/deleteBlogPosts')(req, function (success) {
        res.redirect('/');
      });
    }
  });
};