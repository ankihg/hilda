module.exports = (app) => {
  app.controller('NavController', ['NavService', function(NavService) {

    var vm = this
    vm.NavService = NavService

    vm.linkPos = [
      {x: 5, y: 5},
      {x: 10, y: 10}
    ]



    return vm

  }])
}
