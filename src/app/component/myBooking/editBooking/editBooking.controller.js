'use strict';
function EditBooking($scope, Booking, $stateParams, $state, Customer) {

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
      $scope.booking = result;
    })

  $scope.updateBooking = function(bookingUpdates) {
    Booking.prototype$patchAttributes({id: $scope.booking.id}, bookingUpdates)
      .$promise
      .then(function(response) {
        $state.go('app.manageBooking.pending')
      });
  }

  $scope.cancelBooking = function() {
    Booking.prototype$patchAttributes({id: $scope.booking.id}, {status: "canceled"})
      .$promise
      .then(function(response) {
        // close modal and fire callback
        $state.go('app.manageBooking.pending')
      });
  }

  $scope.acceptBooking = function() {
    Booking.prototype$patchAttributes({id: $scope.booking.id}, {status: "active"})
      .$promise
      .then(function(response) {
        // close modal and fire callback
        $state.go('app.manageBooking.pending')
      });
  }

  $scope.completeBooking = function() {
    Booking.prototype$patchAttributes({id: $scope.booking.id}, {status: "complete"})
      .$promise
      .then(function(response) {
        // close modal and fire callback
        $state.go('app.manageBooking.pending')
      });
  }




}

export default EditBooking;