console.log("Loading CouchDBServices");
/*
 * http://guide.couchdb.org/draft/security.html
 * http://docs-next.angularjs.org/api/angular.module.ngCookies.$cookies
 * https://groups.google.com/forum/#!topic/angular/yc8tODmDm18
 * http://mail-archives.apache.org/mod_mbox/couchdb-user/201011.mbox/%3CAANLkTimSxUWQhwYfTTGe1vNkhkf2xnMiWmt9eriKMU8P@mail.gmail.com%3E
 *
 */
angular.module('fieldDBActivityFeedApp', ['ngResource'])
  .factory(
    "isAUser",
    function($resource) {
      return $resource(OPrime.couchURL().complete + "_design/user/_view/isauser", {}, {
        run: {
          method: "POST",
          data: {
            name: "semisecureadmin",
            password: "none"
          }
          // isArray : false
        }
      });
    })
  .factory(
    "getUserRoles",
    function($resource) {
      return $resource(OPrime.couchURL().complete + "_design/user/_view/roles", {}, {
        run: {
          method: "GET",
          isArray: false
        }
      });
    })
  .factory(
    'GetSessionToken',
    function($http) {
      console.log("Contacting the DB to log user in.");
      if (!OPrime.useUnsecureCouchDB()) {
        return {
          'run': function(dataToPost) {
            console.log("Getting session token.");
            var couchInfo = OPrime.couchURL();
            var promise = $http.get(
              couchInfo.protocol + couchInfo.domain + couchInfo.port + '/_session', dataToPost).then(
              function(response, data, status, headers, config) {
                console.log("Session token set, probably",
                  response);
                return response;
              });
            return promise;
          }
        };
      } else {
        OPrime
          .debug("Not getting session token, instead using an unsecure TouchDB.");
        return {
          'run': function(dataToPost) {
            var couchInfo = OPrime.couchURL();
            var promise = $http.get(
              couchInfo.protocol + couchInfo.domain + couchInfo.port + '', dataToPost).then(
              function(response, data, status, headers, config) {
                console.log("Faking Session token set");
                return response;
              });
            return promise;
          }
        };
      }
    });
