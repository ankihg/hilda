module.exports = (app) => {
  require('./nav.service.js')(app)
  require('./toy.service.js')(app)
}
