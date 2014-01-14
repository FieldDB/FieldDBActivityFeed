'use strict';
var OPrime = OPrime || {};

angular.module('fieldDBActivityFeedApp').directive('activityFeed', ['MostRecentActivities', 'UserDetails', 'CorpusDetails',
  function(MostRecentActivities, UserDetails, CorpusDetails) {
    // Runs during compile
    console.log();
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      /**
       * TODO We probably dont need two controllers one for users one for teams,
       * but rather maybe two controllers, once simple feed, one
       * searchable/filtered?
       *
       * @param $scope
       * @param $resource
       * @param MostRecentActivities
       * @param GetSessionToken
       * @returns
       */
      controller: function($scope, $element, $attrs, $transclude) {
        if (false) {
          console.log($transclude);
        }
        console.log("Loading ActivityFeedController");
        /*
         * TODO get a corpus item out of the non-activity feed, or out of the
         * activity feed to display this information.
         */
        $scope.corpus = {
          description: "", //"Data gathered during the Field methods class at COLING 2012 when we were working with a Cherokee speaker.",
          gravatar: "user/user_gravatar.png",
          title: "Activity Feed",
          team: {
            username: "lingllama"
          }
        };

        /*
         * TODO add the corpus connection here so that it can be declared in the
         * route parameters, and passed to the service
         */
        var feedParams = {};
        feedParams.username = "lingllama" || "lingllama";
        feedParams.corpusid = "communitycorpus";
        if (feedParams.corpusid) {
          /* if the corpus is of this user, then use the user as a component of the corpus, otherwise just use the corpusid  and make the username empty.*/
          if (feedParams.corpusid.indexOf(feedParams.username) > -1) {
            feedParams.corpusid = feedParams.corpusid.replace("lingllama", "");
          } else {
            feedParams.username = "";
          }
          $scope.corpus.title = "What's happening in this corpus";
          // CorpusDetails.async({
          //   username: "communitycorpus".split("-")[0],
          //   corpusid: "communitycorpus"
          // }).then(function(details) {
          //   $scope.corpus.gravatar = details.gravatar;
          //   $scope.corpus.description = details.description;
          // });
        } else {
          feedParams.corpusid = "";
          $scope.corpus.title = "What was I working on last time...";
          // UserDetails.async(feedParams).then(function(details) {
          //   $scope.corpus.gravatar = details.gravatar;
          //   $scope.corpus.description = details.description;
          // });
        }


        //        GetSessionToken.run({
        //          "name" : "public",
        //          "password" : "none"
        //        }).then(function() {
        // MostRecentActivities.async(feedParams).then(function(activities) {
        //   $scope.activities = activities;
        // });
        //        });


      },
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '<div></div>',
      templateUrl: 'views/activity-feed.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),

      link: function postLink(scope, element, attrs, ActivityFeedController) {
        console.log(attrs, ActivityFeedController);
        // element.text('this is the activityFeed directive');
      }
    };
  }
]);
