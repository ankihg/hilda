'use strict';
const angular = require('angular');
require('angular-route');

const app = angular.module('HildaApp', []);
require('./services')(app);
require('./controllers')(app);
require('./directives')(app);
