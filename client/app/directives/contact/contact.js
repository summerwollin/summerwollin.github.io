angular.module('SummerWollin')
  .controller('ContactController', ['$scope', ContactController])
  .directive('swContact', ContactDirective);

    function ContactController ($scope) {
        var vm = this;
    }

    function ContactDirective () {
      return {
          restrict: 'E',
          templateUrl: '/app/directives/contact/contact.html',
          controller: 'ContactController as ProjectsCtrl',
          bindToController: true
      };
    }
