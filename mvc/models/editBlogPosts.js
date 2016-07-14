var moment = require('moment');

module.exports = function(req, done) {
  var editRow = req.body,
      postId = editRow.postId,
      subject = editRow.editTitle,
      post = editRow.editContent,
      edited = moment().unix(),
      success;
  console.log(editRow.postTitle);
  db.query('UPDATE posts SET subject = $1, post = $2, edited = $4 WHERE id = $3', [subject, post, postId, edited], function(err, result) {
    if (err) {
      success = false;
      return console.error('error running query', err);
    }
    else {
     success = true;
    }
    done(success);
  });
};