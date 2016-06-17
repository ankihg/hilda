module.exports = (app) => {
  app.controller('NavController', ['NavService', function(NavService) {

    var vm = this
    vm.NavService = NavService
    return vm

  }])
}
