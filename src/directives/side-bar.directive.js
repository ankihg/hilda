module.exports = (app) => {
  app.directive('sideBar', () => {
    return {
      restrict: 'E',
      repalce: true,
      templateUrl: './directives/templates/side-bar/index.html',
      controller: 'NavController',
      controllerAs: 'navCtrl'
    }
  });

  app.directive('toysAd', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/side-bar/toys-ad.html',
      controller: 'ToysController',
      controllerAs: 'toysCtrl'
    }
  })


}
