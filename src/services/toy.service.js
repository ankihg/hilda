'use strict';
module.exports = (app) => {
  app.factory('ToyService', ['$http', function($http) {

    var path = '/toys'
    this.toys = null

    this.retrieve = function(next) {
      $http.get(path)
        .then(res => {
          this.toys = res.data.data;
        })
        .catch(err => console.log(err))
    }

    return this;
  }])
}
