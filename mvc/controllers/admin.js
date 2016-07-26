module.exports = function(app) {
  var auth = require('http-auth'),
      basic = auth.basic({
        realm: 'Admin',
        file: __dirname + '/../../data/users.htpasswd'
      });
  
  app.route('/admin').get(auth.connect(basic), function(req, res) {
    var model = require('models/global')(req);
    model.content.pageTitle = 'Admin Panel';
    model.content.pageHeader = 'Admin Zone';
    require('models/getAdminPage')(function (blogPosts) {
      model.blogPosts = blogPosts;
      res.render('adminPage', model);
    });
  });
};