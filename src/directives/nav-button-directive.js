module.exports = (app) => {
  app.directive('navButton', () => {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: __dirname+'/templates/nav-button.html'
    }
  })
}
