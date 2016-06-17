module.exports = (app) => {
  console.log('hi from home-controller.js');
  app.controller('HomeController', [function() {
    console.log('hi from home controller');

    var vm = this;
    vm.plz = 'welcome';

    return vm;

  }])
}
