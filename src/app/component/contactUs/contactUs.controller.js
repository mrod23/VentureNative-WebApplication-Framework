'use strict';

function ContactUsCTRL($scope, Venture, $ionicModal, $ionicPopover, $timeout, ionicMaterialInk, ionicMaterialMotion, $stateParams, $ionicSlideBoxDelegate, User, Customer) {
	
	Customer.getCurrent().$promise.then(function(user) {
	  $scope.user = user;
	  console.log(user);
	 });

	let user = new User();
 	$scope.isLoggedIn = user.isAuthenticated;




};
export default ContactUsCTRL;