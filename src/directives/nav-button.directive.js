module.exports = (app) => {
  app.directive('navButton', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './directives/templates/nav-button.html'
    }
  })
}
