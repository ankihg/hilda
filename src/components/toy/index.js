module.exports = function(app) {

  app.component('toy', {
    templateUrl: './components/toy/template.html',
    bindings: {
      toy: '='
    }
  })
}
