'use strict';

angular.module('fieldDBActivityFeedApp').directive('activity', function() {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element) {
      element.text('this is the activity directive');
    }
  };
});
