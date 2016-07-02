module.exports = (app) => {
  require('./nav.controller.js')(app)
  require('./home.controller.js')(app)
  require('./toys.controller.js')(app)
  require('./squirrel-report.controller.js')(app)
}
