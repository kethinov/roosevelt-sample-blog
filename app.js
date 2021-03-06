var pg = require('pg'),
    fs = require('fs'),
    path = require('path'),
    target,
    source,
    config;

config = {
  user: 'postgres',
  database: 'blogposts', 
  password: null,
  port: 5432,
  idleTimeoutMillis: 30000
};

global.db = new pg.Client(config);
 
db.connect(function(err, client, done) {
  if(err) {
    return console.error('could not connect to database', err);
  }
  else {
    console.log('Connected to database');
    target = path.resolve('statics/css/topcoat.less'),
    source = path.resolve('node_modules/topcoat/css/topcoat-desktop-light.css');
    
    fs.access(target, function(err) {
      if (err) {
        fs.symlinkSync(source, target);
      }
    });
    serverStart();
  }
});

function serverStart() {
  require('roosevelt')().startServer();
}