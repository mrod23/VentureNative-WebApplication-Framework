'use strict';

function BecomeAHostCTRL($scope, User, $ionicModal, $ionicPopover, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $stateParams, $ionicSlideBoxDelegate) {

  let user = new User();
  $scope.isLoggedIn = user.isAuthenticated;



  $scope.setHeaderFab = function(location) {
      var hasHeaderFabLeft = false;
      var hasHeaderFabRight = false;
      switch (location) {
          case 'left':
              hasHeaderFabLeft = true;
              break;
          case 'right':
              hasHeaderFabRight = true;
              break;
      }
      $scope.hasHeaderFabLeft = hasHeaderFabLeft;
      $scope.hasHeaderFabRight = hasHeaderFabRight;
  };
  $scope.setHeaderFab('right');





};
export default BecomeAHostCTRL;