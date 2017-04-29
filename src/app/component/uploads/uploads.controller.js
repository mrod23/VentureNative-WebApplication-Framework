'use strict';
function RegisterCTRL($scope, $stateParams, $ionicLoading, $ionicPopup, Customer, Venture) {
  $scope.content = $stateParams;
  var entityOptions = {
    customer: Customer,
    venture: Venture
  }

  entityOptions[$stateParams.type].findById({id: $stateParams.id})
    .$promise
    .then(function(data) {
      $scope.item = data;
      $scope.$watch('item.images', updateModel);

    })


  function updateModel(newVal, old) {
    if(!newVal || !old || old.length === newVal.length) return;

    $ionicLoading.show({
      template: 'Loading...'
    });
    entityOptions[$stateParams.type]
      .prototype$patchAttributes({id: $stateParams.id}, {images: newVal})
      .$promise
      .finally(() => {
        $ionicLoading.hide();
        $state.go('app.manageVenture');
      });
  }


}

export default RegisterCTRL;