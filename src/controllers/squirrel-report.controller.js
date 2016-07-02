module.exports = (app) => {
  app.controller('SquirrelReportController', ['SquirrelReporter', function(SquirrelReporter) {

    var vm = this
    vm.reporter = SquirrelReporter



    vm.map = {
      center: {latitude: 47.668313, longitude: -122.311065},
      zoom: 12,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
    }

    return vm

  }])
}
