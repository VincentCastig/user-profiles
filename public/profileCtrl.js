angular.module('userProfiles')
    .controller('profileCtrl', function($scope, friendService) {
        // FIX ME - assign values to $scope.currentUser and $scope.friends
        $scope.getFriends = function() {
            friendService.getFriends().then(function(response) {
                $scope.currentUser = response.currentUser;
                $scope.friends = response.friends;
            })
        }

        $scope.getFriends();
    });


//Lastly, in `profileCtrl.js` you will need to assign the correct values
//(coming from the `getFriends` method in your service) to `$scope.currentUser`
//and `$scope.friends`.


//this.getFriends = function() {
	//return $http.get('api/profiles')
//};

//res.send({
	//currentUser: req.session.currentUser,
	//friends: x
//})
