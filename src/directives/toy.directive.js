module.exports = (app) => {
  app.directive('toy', () => {
    return {
      restrict: 'E',
      repalce: true,
      templateUrl: './directives/templates/toy.html'
    }
  });
}
