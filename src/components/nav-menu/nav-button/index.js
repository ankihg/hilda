module.exports = function(app) {
  app.component('navButton', {
    templateUrl: './components/nav-menu/nav-button/template.html',
    bindings: {
      link: '='
    }
  })
}
