'use strict';

import modalTemplate from '../search/template.html'

function AboutUsCTRL($scope, $ionicModal, $ionicPopover, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $stateParams, $ionicSlideBoxDelegate, User)  {

  let user = new User();
  $scope.isLoggedIn = user.isAuthenticated;

  $scope.modal = $ionicModal.fromTemplate(modalTemplate, {
    scope: $scope,
    animation: 'slide-in-up'
  })

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };



};
export default AboutUsCTRL;