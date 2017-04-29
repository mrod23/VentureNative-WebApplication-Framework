'use strict';
function ProfileCTRL($scope, $stateParams, User, Customer) {
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.user = Customer.getCachedCurrent();

  $scope.editProfile = function(user) {

    $ionicLoading.show({
      template: 'Loading...'
    });;

    Customer.$save(user)
      .then( function(data) {
        $ionicLoading.hide();
        $state.go('app.profile');
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