module.exports = (app) => {
  app.controller('SquirrelReportController', ['SquirrelReporter', 'TreeService', function(SquirrelReporter, TreeService) {

    var vm = this
    vm.reporter = SquirrelReporter
    vm.TreeService = TreeService;

    vm.plz = "respond"

    vm.map = {
      center: {latitude: 47.668313, longitude: -122.311065},
      zoom: 12,
      options: {
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDoubleClickZoom: true
      },
      events: {
        click: function(mapModel, eventName, originalEventArgs) {
          if (!vm.reporter.clickToPlace)
            return;
          var e = originalEventArgs[0];
          vm.reporter.mapClickCoords.latitude = e.latLng.lat();
          vm.reporter.mapClickCoords.longitude = e.latLng.lng();
          google.maps.event.trigger(mapModel, 'dragend');
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
