'use strict';

function TestPageCTRL($scope, Venture, $ionicModal, $ionicPopover, $timeout, ionicMaterialInk, ionicMaterialMotion, $stateParams, $ionicSlideBoxDelegate) {


  //i think something needs to get injected into the getFeatured for this to work not sure what

  Venture.getFeatured().$promise
    .then((featured) => {
      $scope.featured = featured;
    })
    .catch((err)=> {
      console.log('features cannot be get', err);
    });

  Venture.getVentures().$promise
    .then((ventures) => {
      $scope.ventures = ventures;
    })
    .catch((err)=> {
      console.log('ventures cannot be get', err);
    });


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


  $scope.options = {
    pagination: true,
    direction: "horizontal",
    //freeMode: true
    slidesOffsetBefore: -35,
    spaceBetween: 5,
    loop: true
  }

  $scope.data = {};

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
        console.log("Slider initialized: ", data);
        $scope.slider = data.slider;
      });

}

export default TestPageCTRL;