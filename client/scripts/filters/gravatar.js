'use strict';

angular.module('fieldDBActivityFeedApp', []).filter(
  'interpolate', ['version',
    function(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
  ]).filter('gravatar', function() {
  return function(gravatar, scope) {
    if (!gravatar) {
      return "user_gravatar.png";
    }
    console.log(scope);
    return gravatar.replace("https://secure.gravatar.com/avatar/", "").replace("?s", "").replace(/\//g, "").replace("userpublic_gravatar.png", "968b8e7fb72b5ffe2915256c28a9414c");
  };
});

console.log("Defining ActivityFeedFilters.");
