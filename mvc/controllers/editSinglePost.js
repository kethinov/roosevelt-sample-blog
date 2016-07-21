module.exports = function(app) {
  app.route('/editSinglePost').post(function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'Edit Single Post'
    model.content.pageHeader = 'Post Editor'
    require('models/editSinglePost')(req, function (blogPosts) {
      model.blogPosts = blogPosts;
      res.render('editsinglepost', model);
    });
  });
};