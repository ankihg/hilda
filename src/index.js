'use strict';
const angular = require('angular');
require('angular-route');

const app = angular.module('HildaApp', ['ngRoute']);
require('./services')(app);
require('./controllers')(app);
require('./directives')(app);

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
}])
