module.exports = (app) => {
  app.directive('reportASquirrel', () => {
    return {
      restrict: 'E',
      repalce: true,
      templateUrl: './directives/templates/report-a-squirrel.html',
      controller: 'SquirrelReportController',
      controllerAs: 'sqCtrl'
    }
  });
}
