module.exports = (app) => {
  app.controller('SquirrelReportController', ['SquirrelReporter', function(SquirrelReporter) {

    var vm = this
    vm.reporter = SquirrelReporter

    vm.plz = "respond"

    vm.map = {
      center: {latitude: 47.668313, longitude: -122.311065},
      zoom: 12,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE },
      events: {
        click: function(mapModel, eventName, originalEventArgs) {
          var e = originalEventArgs[0];
          vm.reporter.mapClickCoords.latitude = e.latLng.lat();
          vm.reporter.mapClickCoords.longitude = e.latLng.lng();
        }
      }
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
