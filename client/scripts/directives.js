var OPrime = OPrime || {};

  var ActivityFeedDirectives = angular.module('ActivityFeed.directives', [])
      .directive('appVersion', [ 'version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
        };
      } ]);
  
  console.log("Defining ActivityFeedDirectives.");
