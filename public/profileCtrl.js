angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.currentUser = friendService.getFriends().then(function(response) {
		return response.data
	})

	$scope.friends = friendService.getFriends().then(function(response) {
		return response.data
	})

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
