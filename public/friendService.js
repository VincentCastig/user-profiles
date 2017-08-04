angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http.get('api/user')
    };

    this.getFriends = function() {
    	return $http.post('api/profiles')
    };

});


//Next, we need to write the `getFriends` method in `friendService.js` so that it
//sends a `GET` request to our `/api/profiles` endpoint.
