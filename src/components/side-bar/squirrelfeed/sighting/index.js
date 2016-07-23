module.exports = function(app) {

  app.component('sighting', {
    templateUrl: './components/side-bar/squirrelfeed/sighting/template.html',
    bindings: {
      sighting: '='
    }
  })
}
