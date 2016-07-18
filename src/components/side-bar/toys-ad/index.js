module.exports = function(app) {

  app.component('toysAd', {
    templateUrl: './components/side-bar/toys-ad/template.html',
    controller: ['$scope', 'ToyService', function($scope, ToyService) {
      $scope.ToyService = ToyService;
    }]
  })
}
