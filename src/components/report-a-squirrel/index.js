module.exports = function(app) {

  app.component('reportASquirrel', {
    templateUrl: './components/report-a-squirrel/template.html',
    controllerAs: 'sqCtrl',
    controller:  ['SquirrelReporter', function(SquirrelReporter) {

      var vm = this
      vm.reporter = SquirrelReporter

      vm.plz = "respond"

      vm.geolocate = false;

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

      vm.submit = function() {
        if (!vm.reporter.newSighting.reporter)
          alert('who is reporting this squirrel sighting?');

        if (vm.geolocate && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log('here is ur location');
            console.log(position);
            vm.reporter.newSighting.loc.latitude = position.coords.latitude;
            vm.reporter.newSighting.loc.longitude = position.coords.longitude;
            console.log('report it w geoloc');
            vm.reporter.reportSighting();
          });
        } else {
          console.log('report w/o geoloc');
          if (vm.reporter.newSighting.loc.latitude && vm.reporter.newSighting.loc.longitude)
            vm.reporter.reportSighting();
          else
            alert('plz input lat & lng of squirrel sighting')
        }

        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log('here is ur location');
        //     console.log(position);
        //   });
        // }
        // vm.reporter.reportSighting();
      }

      return vm

    }]
  })
}
