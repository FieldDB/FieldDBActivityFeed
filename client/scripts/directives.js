'use strict';

angular.module('fieldDBActivityFeedApp')
	.directive('appVersion', ['version',
		function(version) {
			return function(scope, elm) {
				elm.text(version);
			};
		}
	]);

console.log("Defining ActivityFeedDirectives.");
