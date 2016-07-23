module.exports = function(app) {

  app.component('squirrelfeed', {
    templateUrl: './components/side-bar/squirrelfeed/template.html',
    controller: ['$scope', 'SquirrelReporter', function($scope, SquirrelReporter) {
      $scope.SquirrelReporter = SquirrelReporter;
    }]
  })
}
