module.exports = function(app) {

  require('./toys-ad')(app);

  app.component('sideBar', {
    templateUrl: './components/side-bar/template.html',
    controller: ['$scope', 'NavService', function($scope, NavService) {
      $scope.NavService = NavService;
    }]
  })
}
