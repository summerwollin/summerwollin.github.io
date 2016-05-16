angular.module('SummerWollin')
  .controller('ProjectsController', ['$scope', ProjectsController])
  .directive('swProjects', ProjectsDirective);

    function ProjectsController ($scope) {
        var vm = this;
    }

    function ProjectsDirective () {
      return {
          restrict: 'E',
          templateUrl: '/app/directives/projects/projects.html',
          controller: 'ProjectsController as ProjectsCtrl',
          bindToController: true
      };
    }
