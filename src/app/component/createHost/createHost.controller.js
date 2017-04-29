'use strict';
function CreateHostCTRL($scope, $state, User) {
  	$scope.host = {};

	$scope.saveHost = function(host) {

    $ionicLoading.show({
      template: 'Loading...'
    });

    User.update().$promise
          .then( function(data) {
            $ionicLoading.hide();
            $state.go('app.home');
          })
          .catch(function(err) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'could not create host',
              template: 'Try again soon'
            });

          })
  }

}

export default CreateHostCTRL;

