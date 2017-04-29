'use strict';

function UpdateBookingCTRL(Customer, Booking, Venture, $scope, $stateParams, $state) {

  $scope.user = Customer.getCachedCurrent();

  Booking.findOne({
    filter: {
      where: {
        id: $stateParams.id
      },
      include: ['user', 'venture']
    }
  })
    .$promise
    .then(function(result) {
      result.requestedDate = new Date(result.requestedDate);
      result.requestedTime = new Date(result.requestedTime);
      $scope.booking = result;
    })

  $scope.updateBooking = function(bookingUpdates) {
    Booking.prototype$patchAttributes({id: $scope.booking.id}, bookingUpdates)
      .$promise
      .then(function(response) {
        $state.go('app.manageBooking.pending')
      });
  }




}

export default UpdateBookingCTRL;

