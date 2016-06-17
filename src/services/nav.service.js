'use strict';
module.exports = (app) => {

  app.factory('NavService', ['$location', function($location) {

    this.getLocation = function() {
      return $location.path();
    }

    this.plz = "h i l d a";

    var Link = function(name, path) {
      this.name = name;
      this.path = path;
    }
    Link.prototype.go = function() {
      $location.path(this.path);
    }

    this.links = {
      home: new Link('home', '/'),
      about: new Link('toys', '/toys'),
    }

    this.linksArr = (()=> {
      let linksArr = []
      for (let link in this.links) { linksArr.push(this.links[link]) }
      return linksArr
    })()

    this.go = function(destination) {
      $location.path(links[destination]);
    }

    return this;

  }])



}
