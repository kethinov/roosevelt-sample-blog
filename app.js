var pg = require('pg'),
    config;

global.moment = require('moment');

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
    serverStart();
  }
});

function serverStart() {
  require('roosevelt')().startServer();
}