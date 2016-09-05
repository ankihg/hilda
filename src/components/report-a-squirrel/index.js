module.exports = function(app) {

  app.component('reportASquirrel', {
    templateUrl: './components/report-a-squirrel/template.html',
    controllerAs: 'sqCtrl',
    controller:  ['SquirrelReporter', function(SquirrelReporter) {

      var vm = this
      vm.reporter = SquirrelReporter

      vm.geolocate = false;

      vm.updateNewSightingLoc = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              vm.reporter.newSighting.loc.latitude = position.coords.latitude;
              vm.reporter.newSighting.loc.longitude = position.coords.longitude;
          });
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
