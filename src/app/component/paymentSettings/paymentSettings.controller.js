'use strict';
function RegisterCTRL($scope, $state,$ionicHistory, $ionicPopup, $ionicLoading) {
  $scope.user = {};

  $scope.register = function() {

    $ionicLoading.show({
      template: 'Loading...'
    });;


  }

}

export default RegisterCTRL;