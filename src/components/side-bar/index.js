module.exports = function(app) {

  require('./toys-ad')(app);
  require('./squirrelfeed')(app);

  app.component('sideBar', {
    templateUrl: './components/side-bar/template.html',
    controller: ['$scope', 'NavService', function($scope, NavService) {
      $scope.NavService = NavService;
    }]
  })
}
