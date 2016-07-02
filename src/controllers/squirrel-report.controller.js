module.exports = (app) => {
  app.controller('SquirrelReportController', [function() {

    var vm = this

    vm.map = { center: {latitude: 47.668313, longitude: -122.311065}, zoom: 8}

    return vm

  }])
}
