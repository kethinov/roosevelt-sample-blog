module.exports = function(app) {
  var auth = require('http-auth'),
      basic = auth.basic({
        realm: 'Admin',
        file: __dirname + '/../../data/users.htpasswd'
      });
  
  app.route('/newPost').get(auth.connect(basic), function(req, res) {
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