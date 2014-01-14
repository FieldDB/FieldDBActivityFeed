'use strict';

angular.module('fieldDBActivityFeedApp', [
  'ngResource',
  'ngRoute'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/user/:username/corpus/:corpusid', {
        templateUrl: 'partials/activity_feed_widget.html',
        controller: ActivityFeedController
      })
      .when('/user/:username', {
        templateUrl: 'partials/activity_feed_widget.html',
        controller: ActivityFeedController
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/user/:username/corpus/:corpusid'
      });
  });
