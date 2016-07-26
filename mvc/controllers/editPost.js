module.exports = function(app) {
  var auth = require('http-auth'),
      basic = auth.basic({
        realm: 'Admin',
        file: __dirname + '/../../data/users.htpasswd'
      });
  
  app.route('/editPost').get(auth.connect(basic), function(req, res) {
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