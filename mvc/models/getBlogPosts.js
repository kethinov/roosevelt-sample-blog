var moment = require('moment');

module.exports = function(done) {
  
  db.query('SELECT * FROM posts ORDER BY id DESC', function(err, result) {
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
      row.machineEdited = row.edited
      row.date = moment.unix(row.machineDate).format('MM/DD/YYYY');
      row.edited = moment.unix(row.machineEdited).format('MM/DD/YYYY');
      console.log(row.edited);
      blogPosts.push(row);
    }
    
    done(blogPosts);
  });

  /*return { 
    "blogPosts": [ 
      {
        "subject": "Post Title 1",
        "post": "The content of this post is static",
        "machineDate": "2016-06-24T21:37",
        "date": "June, 24 2016"
      },
      {
        "subject": "Blog Post 2",
        "post": "This is a really cool post, number 2",
        "machineDate": "2016-06-25T21:37",
        "date": "June, 25 2016"
      }
    ]
  };*/
};