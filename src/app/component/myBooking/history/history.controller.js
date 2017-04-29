'use strict';
function HistoryCTRL($scope, Customer, Venture, Booking) {
  $scope.user = Customer.getCachedCurrent();


  $scope.doRefresh = function() {
     Booking.find({
      filter: {
        where: {
          user: $scope.user.id,
          status: {
            nin: ["pending", "active"]
          }
        }
      }
    }).$promise
    .then(function (bookings) {
      $scope.bookings = bookings;
      console.log(bookings);
    })
    .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  }

  $scope.doRefresh();

}

export default HistoryCTRL;

