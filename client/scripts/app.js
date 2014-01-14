'use strict';

angular.module('fieldDBActivityFeedApp', [
  'ngResource',
  'ngRoute'
]).config(function($routeProvider) {
  $routeProvider
    .when('/user/:username/corpus/:corpusid', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/user/:username', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/user/lingllama/corpus/communitycorpus'
    });
});
