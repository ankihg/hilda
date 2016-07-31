'use strict';
module.exports = (app) => {
  app.factory('TreeService', ['$http', function($http) {

    var path = '/trees'
    this.trees = null

    this.retrieve = function(next) {
      $http.get(path)
        .then(res => {
          this.trees = res.data.data;
        })
        .catch(err => console.log(err))
    }

    return this;
  }])
}
