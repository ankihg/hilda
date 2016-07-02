module.exports = (app) => {
  require('./nav.service.js')(app)
  require('./toy.service.js')(app)
  require('./squirrel-reporter.service.js')(app)
}
