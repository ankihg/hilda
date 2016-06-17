module.exports = (app) => {
  app.controller('ToysController', ['ToyService', function(ToyService) {

    var vm = this
    vm.ToyService = ToyService
    return vm

  }])
}
