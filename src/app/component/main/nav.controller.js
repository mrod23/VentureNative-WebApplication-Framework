'use strict';

function NavCTRL($scope, Customer, $ionicHistory, $state, Container ) {


  var user = $scope.user = Customer.getCachedCurrent();

  function updateUser(){
    Customer.getCurrent().$promise
    .then(function(user){
      $scope.user = user;
    });
  }

  if(Customer.isAuthenticated()) {
    updateUser();
  }

  $scope.$on('loggedIn', updateUser);


  $scope.logout = function () {

    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    Customer.logout();
    $scope.user = null;
    $state.go('app.auth');
  }


}

export default NavCTRL;