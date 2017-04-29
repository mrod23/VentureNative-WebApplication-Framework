'use strict';
function EditVenture($scope, Booking, $stateParams, $state, Customer, Venture, $ionicHistory) {
  $scope.user = Customer.getCachedCurrent();
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  Venture.findOne({
    filter: {
      where: {
        id: $stateParams.id
      }

    }
  })
    .$promise
    .then(function(venture) {
      $scope.venture = venture;
      $scope.uploadOptions = {
        id: venture.id,
        type: 'venture'
      }

    })

  $scope.updateVenture = function(ventureUpdates) {
    Venture.prototype$patchAttributes({id: $scope.venture.id}, ventureUpdates)
      .$promise
      .then(function(response) {
        $state.go('app.manageVenture', {reload:true})
      });
  }


}

export default EditVenture;