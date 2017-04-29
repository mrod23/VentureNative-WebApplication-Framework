'use strict';

import modalTemplate from '../search/template.html'

function HomeCTRL($scope, User, Venture, $ionicModal,
        $ionicSlideBoxDelegate, City, Customer, $q, $ionicLoading) {
  let activeCities = $scope.activeCities = {};
  let activeCountry = $scope.activeCountry = {};

  $scope.modal = $ionicModal.fromTemplate(modalTemplate, {
    scope: $scope,
    animation: 'slide-in-up'
  })

  $scope.query = undefined;
  $scope.user = Customer.getCachedCurrent();
  $scope.makeCalls = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="lines"></ion-spinner><p>Finding Ventures and Cities</p>'
    });
    var calls = [
      Venture.find({
        filter:{
          include: ['host', 'city'],
          where: {featured: true}
        }
      }).$promise,
      Venture.find({
        filter: {
          include: ['host', 'city'],
          limit: 20
        }
      }).$promise,
      City.find({filter: {
        where: {
          featured:true
        },
        limit: 10,
      }}).$promise
    ]

    $q.all(calls)
      .then((responses) => {
        $scope.featured = responses[0];
        $scope.ventures = responses[1];
        $scope.cities = responses[2];
      })
      .catch((err)=> {
        console.log('features cannot be get', err);
      })
      .finally(function(){
        $ionicSlideBoxDelegate.update();
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      });
  }


  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    if($scope.activeCities && Object.keys($scope.activeCities).length) {
      $scope.query = {
        city: {
          inq: Object.keys($scope.activeCities)
        }
      };

    }
    else {
      $scope.query = undefined;
    }
    $scope.doRefresh();
    $scope.modal.hide();

  };

  $scope.changeActive = function(index) {
    if ($scope.activeCountry === index) {
      $scope.activeCountry = -1;
    }
    else {
      $scope.activeCountry = index;
    }
  };

  $scope.doRefresh = function(query) {
    console.log('updating search');

    Venture.find({
      filter: {
        where: $scope.query,
        limit: 100,
        include: ['host', 'city']
      }
    }).$promise
      .then(function(data) {

        console.log(data);
        $scope.searchResults = data;
      });
  }

  $scope.toggleActiveCity = function(cityCode) {
    console.warn(cityCode)
    if(activeCities[cityCode]) {
      delete activeCities[cityCode];
    }
    else {
      activeCities[cityCode] = true;
    }
  }

  $scope.makeCalls();

}


export default HomeCTRL;