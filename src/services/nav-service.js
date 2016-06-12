module.exports = (app) => {

  app.factory('NavService', ['$location', function($location) {

    this.getLocation = function() {
      return $location.path();
    }

    this.plz = "h i l d a";

    this.destinations = {
      home: '/',
      about: '/about'
    }


    this.go = function(destination) {
      $location.path(destinations[destination]);
    }

    return this;

  }])



}
