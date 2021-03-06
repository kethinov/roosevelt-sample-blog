// sample static global base model
var model = {
  content: {
    appTitle: 'roosevelt sample blog',
    pageTitle: '{content.appTitle}',
    pageHeader: 'Home'
  }
};

// extend global model provide additional useful vars at runtime and export it
module.exports = function(req) {
  return {

    // always static
    content: model.content,

    // recalculated each require
    currentYear: new Date().getFullYear(),
    mainDomain: req.headers['x-forwarded-host'] || req.headers.host,
    NODE_ENV: process.env.NODE_ENV
  };
};