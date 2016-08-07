'use strict';
module.exports = (app) => {

  app.factory('NavService', ['$location', function($location) {

    this.getLocation = function() {
      return $location.path();
    }

    this.plz = "h i l d a";

    var Link = function(name, path, pos, foreign) {
      this.name = name;
      this.path = path;
      this.pos = pos;
      this.foreign = foreign;
    }
    Link.prototype.go = function() {
      (!this.foreign) ? $location.path(this.path) : window.open(this.path, '_blank');
    }

    this.links = {
      home: new Link('home', '/', {x: 8, y: 25}),
      toys: new Link('toys', '/toys', {x: 12, y: 45}),
      bio: new Link('bio', '/bio', {x: 8, y: 65}),
      flickr: new Link('flickr', 'https://www.flickr.com/photos/142887762@N06/', {x: 85, y: 25}, true),
      squirrels: new Link('squirrels', '/squirrel-report', {x: 81, y: 45}),
      parkour: new Link('parkour', '/parkour', {x: 85, y: 65})
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
