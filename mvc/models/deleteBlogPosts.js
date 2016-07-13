module.exports = function(req, done) {
  var editRow = req.body,
      postId = editRow.postId,
      success;
  db.query('DELETE FROM posts WHERE id = $1', [postId], function(err, result) {
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