'use strict';
function PendingCTRL($scope, Customer, Venture, Booking) {

  $scope.user = Customer.getCachedCurrent();

  $scope.doRefresh = function() {
     Venture.find({
        filter: {
          where: {host: $scope.user.id}
        }
      }).$promise
      .then(function(list) {
        var ventures =  list.map(function(item) {
          return item.id;
        });

        Booking.find({
          filter: {
            where: {
              venture: {
                inq: ventures
              },
              status: "pending"
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

      });
  }

  $scope.doRefresh();

}

export default PendingCTRL;