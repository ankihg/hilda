'use strict';
const angular = require('angular');
require('angular-route');
require('lodash')
require('angular-simple-logger')
require('angular-google-maps')

const app = angular.module('HildaApp', ['ngRoute', 'uiGmapgoogle-maps']);
require('./services')(app);
require('./controllers')(app);
require('./components')(app);
// require('./directives')(app);

app.config(['$routeProvider', function(router) {
  router
    .when('/', {
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      templateUrl: './views/home.html'
    })
    .when('/toys', {
      controller: 'ToysController',
      controllerAs: 'toysCtrl',
      templateUrl: './views/toys.html'
    })
    .when('/bio', {
      templateUrl: './views/bio.html'
    })
    .when('/squirrel-report', {
      controller: 'SquirrelReportController',
      controllerAs: 'sqCtrl',
      templateUrl: './views/squirrel-report.html'
    })
}])
