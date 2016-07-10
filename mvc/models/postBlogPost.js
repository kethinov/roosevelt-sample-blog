var moment = require('moment');

module.exports = function(req, done) {
  var addRow = req.body,
      success,
      subject = addRow.postTitle,
      post = addRow.postContent,
      time = moment(),
      date = moment().unix();
  db.query('INSERT INTO posts (subject, post, date) VALUES ($1, $2, $3)', [subject, post, date], function(err, result) {
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