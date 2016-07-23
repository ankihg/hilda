module.exports = function(app) {

  require('./sighting')(app);

  app.component('squirrelfeed', {
    templateUrl: './components/side-bar/squirrelfeed/template.html',
    controller: ['$scope', 'SquirrelReporter', function($scope, SquirrelReporter) {
      $scope.SquirrelReporter = SquirrelReporter;
    }]
  })
}
