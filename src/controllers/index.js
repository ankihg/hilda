module.exports = (app) => {
  console.log('hi from controllers index');
  require(__dirname+'/nav-controller.js')(app);
  require(__dirname+'/home-controller.js')(app);
}
