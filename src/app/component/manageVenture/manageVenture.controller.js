'use strict';
function ManageVentureCTRL(Customer, Booking, Venture, $scope) {

  $scope.user = Customer.getCachedCurrent();

  $scope.doRefresh = function() {
    Venture.find({
          filter: {
           limit: 20,
           where: {
            host: $scope.user.id
            }
          } 
        }).$promise
          .then((ventures) => {
            $scope.ventures = ventures;
            console.log(ventures);
        })
          .catch((err)=> {
            console.log('ventures cannot be get', err);
        }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
        });
  }

  $scope.doRefresh();





  

  
}

export default ManageVentureCTRL;