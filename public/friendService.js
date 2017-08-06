angular.module('userProfiles')
    .service('friendService', function($http) {


        this.login = function(user) {
            /* FIX ME */
            return $http.post('/api/login', user);
        };

        this.getFriends = function() {
            /* FIX ME */
            return $http.get('/api/profiles').then(function(response) {
                
                return response.data;
            });
        };

    })


//Next, we need to write the `getFriends` method in `friendService.js` so that it
//sends a `GET` request to our `/api/profiles` endpoint.
