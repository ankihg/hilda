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
      toys: new Link('toys', '/toys'),
    }

    this.linksArr = (() => {
      let linksArr = []
      for (var link in this.links) { linksArr.push(this.links[link]) }
      return linksArr
    })()

    this.go = function(destination) {
      $location.path(this.links[destination].path);
    }

    return this;

  }])



}
