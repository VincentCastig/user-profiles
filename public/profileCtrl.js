angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
	getFriendsProfiles: function(){
		var x=[]
			for(i = 0; i < req.session.currentUser.friends.length; i++){
					for(obj of profiles){
						if(req.session.currentUser.friends[i] == obj.name){
							x.push(obj)
						}
					}
					res.send({
						currentUser: req.session.currentUser,
						friends: x
					})
			}
	}
}

});
