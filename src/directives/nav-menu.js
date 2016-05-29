module.exports = (app) => {
  app.directive('navMenu', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/nav-menu.html'
    }
  });
}
