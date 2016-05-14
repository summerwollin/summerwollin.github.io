angular.module('SummerWollin')
  .controller('HeaderController', ['$scope', HeaderController])
  .directive('swHeader', HeaderDirective);

    function HeaderController ($scope) {
        var vm = this;
    }

    function HeaderDirective () {
      return {
          restrict: 'E',
          templateUrl: '/app/directives/header/header.html',
          controller: 'HeaderController',
          bindToController: true
      };
    }
