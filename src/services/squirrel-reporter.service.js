'use strict';
module.exports = (app) => {
  app.factory('SquirrelReporter', ['$http', function($http) {

    var path = '/squirrel-sightings'
    this.sightings = null;

    this.mapClickCoords = {
      latitude: null,
      longitude: null
    }

    this.clickToPlace = false;
    this.newSighting = {
      loc: this.mapClickCoords
    }

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

    this.reportSighting = function(next) {
      this.newSighting.loc = [this.newSighting.loc.longitude, this.newSighting.loc.latitude];
      $http.post(path, this.newSighting)
        .then(res => {
          console.log(res.data.data);
          this.sightings.push(res.data.data);
          this.mapClickCoords = {latitude: null, longitude: null}
          this.newSighting = { loc: this.mapClickCoords }
          next && next(res.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    }

    return this;
  }])
}
