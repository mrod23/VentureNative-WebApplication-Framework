'use strict';
function CreateVentureCTRL($scope, $state, $ionicHistory, $ionicPopup, $ionicLoading, User, Venture, Customer) {
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.user = Customer.getCachedCurrent();

  $scope.saveVenture = function(venture) {
    $ionicLoading.show({
       template: 'Loading...'
    });;

    venture.host = $scope.user.id;

    Venture
      .create(venture)
      .$promise
      .then( function(data) {
        $ionicLoading.hide();
        $state.go('app.uploads', {
          type: 'venture',
          id: data.id
        })
      })
      .catch(function(err) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'could not create venture',
          template: 'Try again soon'
        });
      });
  }


}

export default CreateVentureCTRL;