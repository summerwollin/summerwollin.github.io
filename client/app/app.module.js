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
        views: {
            'header': {
              template: '<sw-header/></sw-header>',
              controller: 'HeaderController'
            },
            'about': {
              template: '<sw-about></sw-about>'
            }
        }
      });
      // .state('404', {
      //   url: '/404',
      //   views: {
      //       'body': {
      //           template: 'Aww snap! 404. You must be lost. <a ui-sref="home">Go home!</a>'
      //       }
      //   }
      });
}());
