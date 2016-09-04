module.exports = function(app) {

  require('./nav-button')(app);

  app.component('nav-menu', {
    templateUrl: './components/nav-menu/template.html',
    controller:  ['NavService', function(NavService) {

      var vm = this
      vm.NavService = NavService
      return vm

    }]
  })
}
