'use strict';
module.exports = (app) => {
  app.factory('SquirrelReporter', ['$http', function($http) {

    var path = '/squirrel-sightings'
    this.sightings = null;

    this.retrieveSightings = function(next) {
      $http.get(path)
        .then(res => {
          console.log(res.data.data);
          this.sightings = res.data.data;
          next && next(this.sightings);
        })
        .catch(err => {
          console.log(err);
        })
    }

    return this;
  }])
}
