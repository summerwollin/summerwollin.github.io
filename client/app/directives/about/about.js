angular.module('SummerWollin')
  .controller('AboutController', ['$scope', AboutController])
  .directive('swAbout', AboutDirective);

    function AboutController ($scope) {
        var vm = this;
    }

    function AboutDirective () {
      return {
          restrict: 'E',
          templateUrl: '/app/directives/about/about.html',
          controller: 'AboutController as AboutCtrl',
          bindToController: true
      };
    }
