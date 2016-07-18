module.exports = function(app) {

  app.component('reportASquirrel', {
    templateUrl: './components/report-a-squirrel/template.html',
    controllerAs: 'sqCtrl',
    controller:  ['SquirrelReporter', function(SquirrelReporter) {

      var vm = this
      vm.reporter = SquirrelReporter

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

    }]
  })
}
