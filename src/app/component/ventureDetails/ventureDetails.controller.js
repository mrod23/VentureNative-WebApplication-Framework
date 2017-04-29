'use strict';

function VentureDetailsCTRL($scope, $state, $ionicHistory, $ionicPopup,
  $ionicLoading, User, Venture, ionicMaterialInk,
  ionicMaterialMotion,$stateParams, $ionicPopover, $ionicSlideBoxDelegate, Customer) {

  $scope.user = Customer.getCachedCurrent();

  $scope.cancelVenture = function() {
    Venture.deleteById({id: $scope.venture.id})
      .$promise
      .then(function() {
        // close modal and fire callback
        console.log("deleted");
        $ionicHistory.clearHistory();
        $state.go('app.manageVenture', {reload: true});
      });
  }


  Venture.findById({
    id: $stateParams.id,
    filter: {
      include: [{host: 'city'}]
    }
  }).$promise
    .then(function(venture) {

      $scope.venture = venture;
      $ionicSlideBoxDelegate.update();
  });


  // Activate ink for controller
  ionicMaterialInk.displayEffect();

  ionicMaterialMotion.pushDown({
      selector: '.push-down'
  });
  ionicMaterialMotion.fadeSlideInRight({
      selector: '.animate-fade-slide-in .item'
  });


}

export default VentureDetailsCTRL;