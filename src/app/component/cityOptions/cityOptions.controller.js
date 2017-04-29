'use strict';

function CityOptionsCTRL($scope, City, Customer, Venture, $stateParams) {
  $scope.city = {};

  $scope.user = Customer.getCachedCurrent();

 console.log($stateParams.id);
 Venture.find({
    filter: {
      where: {
        city: $stateParams.id
      },
      limit: 100,
      include: ['host', 'city']
    }
  }).$promise
    .then(function(data) {
      $scope.data = data;
    });

  City.findOne({
    filter: {
      where: $stateParams
    }
  }).$promise
    .then(function(city) {
      $scope.city = city;
  });


}

export default CityOptionsCTRL;