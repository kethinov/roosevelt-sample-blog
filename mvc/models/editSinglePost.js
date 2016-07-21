var moment = require('moment');

module.exports = function(req, done) {
  var editRow = req.body,
      postId = editRow.postId;
  
  db.query('SELECT * FROM posts WHERE id = $1', [postId], function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    var blogPosts = [],
        rows = result.rows,
        totalRows = rows.length,
        row,
        i;
        
    for (i = 0; i < totalRows; i++) {
      row = rows[i];
      row.machineDate = row.date;
      row.date = moment.unix(row.machineDate).format('MM/DD/YYYY');
      if (row.edited) {
        row.machineEdited = row.edited
        row.edited = moment.unix(row.machineEdited).format('MM/DD/YYYY');
      }
      else {
        row.edited = undefined;
      }
      blogPosts.push(row);
    }
    
    done(blogPosts);
  });
};