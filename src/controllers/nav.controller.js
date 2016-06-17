module.exports = (app) => {
  app.controller('NavController', ['NavService', function(NavService) {
    console.log('hi from nav controller');

    var vm = this;
    vm.NavService = NavService
    vm.plz = 'hi';

    return vm;

  }])
}
