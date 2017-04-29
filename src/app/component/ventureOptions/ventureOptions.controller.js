'use strict';
import modalTemplate from '../search/template.html'

function VentureOptionsCTRL($scope, $state, $ionicHistory, $ionicLoading, Customer, Venture, $ionicModal, $ionicPopover, ionicMaterialInk, ionicMaterialMotion, City) {

    let activeCities = $scope.activeCities = {};
    let activeCountry = $scope.activeCountry = {};
    $scope.modal = $ionicModal.fromTemplate(modalTemplate, {
      scope: $scope,
      animation: 'slide-in-up',
      controller: function ($scope) {
        $scope.dick = 'blaaa'
      }
    })

    City.find({filter: {
      where: {
        featured:true
      },
      limit: 10,
    }}).$promise
      .then((cities)=> {
        $scope.cities = cities;
      });

    $scope.query = undefined;

    $scope.user = Customer.getCachedCurrent();

    $scope.doRefresh = function() {

    Venture.find({
        filter: {
         limit: 20,
         where: $scope.query
        } 
      }).$promise
        .then((ventures) => {
          $scope.ventures = ventures;
      })
        .catch((err)=> {
          console.log('ventures cannot be get', err);
      });
    }

    $scope.doRefresh();

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

    
    $scope.toggleActiveCity = function(cityCode) {
      console.warn(cityCode)
      if(activeCities[cityCode]) {
        delete activeCities[cityCode];
      }
      else {
        activeCities[cityCode] = true;
      }
    }

}

export default VentureOptionsCTRL;