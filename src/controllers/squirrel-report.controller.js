module.exports = (app) => {
  app.controller('SquirrelReportController', ['SquirrelReporter', function(SquirrelReporter) {

    var vm = this
    vm.reporter = SquirrelReporter



    vm.map = {
      center: {latitude: 47.668313, longitude: -122.311065},
      zoom: 12,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
    }

    vm.infowindowConfig = {
      selected: null,
      onClick(sightingId) {
        // this.options.visible = !this.options.visible;
        this.selected = sightingId;
      },
      clockClick() {
        // this.options.visible = false;
        this.selected = null;
      }
    }

    return vm

  }])
}
