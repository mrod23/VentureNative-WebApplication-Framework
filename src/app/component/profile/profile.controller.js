'use strict';
function ProfileCTRL($scope, $state, $stateParams, $ionicLoading, Customer, $ionicPopup, $ionicHistory) {
  var user = $scope.user = Customer.getCachedCurrent();
  $scope.uploadOptions = {
    type: 'customer',
    id: user.id
  }
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
  $scope.editProfile = function(user) {

    $ionicLoading.show({
      template: 'Loading...'
    });

    Customer
      .prototype$patchAttributes({id: user.id}, user)
      .$promise
      .then( function(data) {
        $ionicLoading.hide();
        $state.go('app.home');
      })
      .catch(function(err) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'could not change profile',
          template: 'Try again soon'
        });

      })
  }

}

export default ProfileCTRL;


