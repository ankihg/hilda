module.exports = (app) => {
  // require('fs').readdirSync('./directives').forEach((file) => {
  //   if (file !== 'index.js' && file !== 'templates') require(__dirname+'/'+file)(app);
  // });

  require('./nav-menu.directive')(app)
  require('./nav-button.directive')(app)
  require('./side-bar.directive')(app)
}
