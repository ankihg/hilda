module.exports = (app) => {
  app.directive('sideBar', () => {
    return {
      restrict: 'E',
      repalce: true,
      templateUrl: './directives/templates/side-bar.html'
    }
  });
}
