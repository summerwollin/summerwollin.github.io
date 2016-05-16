(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ui.bootstrap'
  ];

  angular.module('SummerWollin', dependencies)
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      });

    });
}());
// .state('404', {
//   url: '/404',
//   views: {
//       'body': {
//           template: 'Aww snap! 404. You must be lost. <a ui-sref="home">Go home!</a>'
//       }
//   }
