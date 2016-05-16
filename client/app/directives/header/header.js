angular.module('SummerWollin')
  .controller('HeaderController', ['$scope', HeaderController])
  .directive('swHeader', HeaderDirective);

    function HeaderController ($scope) {
        var vm = this;
        vm.active = 'about';
        vm.isActive = isActive;

        function isActive() {
          console.log('here');
          console.log(activePage);
          vm.active = activePage;
        }
    }

    function HeaderDirective () {
      return {
          restrict: 'E',
          templateUrl: '/app/directives/header/header.html',
          controller: 'HeaderController',
          bindToController: true
      };
    }
