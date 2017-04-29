'use strict';
function RegisterCTRL($scope, $state, Comment, $ionicHistory, $ionicLoading) {
  $scope.user = {};

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.submitComment = function(comment) {

    $ionicLoading.show({
      template: 'Loading...'
    });;

  }

}

export default RegisterCTRL;