'use strict';
function HostCTRL($scope, $state, User, $stateParams, Customer, Venture) {

  $scope.user = Customer.getCachedCurrent();
  $scope.showHost = false;
  $scope.fb = function(user) {
    FB.ui({
      method: 'send',
      to: user,
      link: 'http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html',
    });
  }

  Customer.findById({
      id: $stateParams.id,
      filter:{ include:'city' }
  }).$promise
    .then(function(host) {
      $scope.host = host;
      console.log(host);
  });

  Venture.find({
    filter: {
      where: {
        host: $stateParams.id
      }
    }
  }).$promise
    .then(function(ventures) {
      $scope.ventures = ventures;
    });
}

export default HostCTRL;

