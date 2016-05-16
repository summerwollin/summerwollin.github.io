(function() {
  'use strict';

  angular.module('summerWollin')
    .factory('headerService', factory);


  factory.$inject = [];

  function factory ($http, env) {
    var active = [];

    var host = env.apiHost;

    return {
      add: addPost,
      list: listPosts,
      getUsernames: getUsernames

    }


}());
