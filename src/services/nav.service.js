'use strict';
module.exports = (app) => {

  app.factory('NavService', ['$location', function($location) {

    this.getLocation = function() {
      return $location.path();
    }

    this.plz = "h i l d a";

    var Link = function(name, path, pos) {
      this.name = name;
      this.path = path;
      this.pos = pos;
    }
    Link.prototype.go = function() {
      $location.path(this.path);
    }

    this.links = {
      home: new Link('home', '/', {x: 8, y: 20}),
      toys: new Link('toys', '/toys', {x: 12, y: 40}),
      bio: new Link('bio', '/bio', {x: 8, y: 60}),
      flickr: new Link('flickr', '/flickr', {x: 86, y: 20}),
      squirrels: new Link('squirrels', '/squirrel-report', {x: 82, y: 40}),
      plz: new Link('plz', '/plz', {x: 86, y: 60})
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
