module.exports = function(app) {
  app.route('/newPost').get(function(req, res) {
    var model = {};
    res.render('newPost', model);
  });
  app.route('/newPost').post(function(req, res) {
    require('models/postBlogPost')(req, res, function (success) {
      res.redirect('/');
    });
  });
};