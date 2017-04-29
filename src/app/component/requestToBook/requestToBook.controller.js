'use strict';

function RequestToBookCTRL(Venture, $scope, $state, Booking, $ionicHistory, $stateParams, $ionicPopup, $ionicLoading, Customer) {

  $scope.booking = {};

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  Customer.getCurrent().$promise.then(function(user) {
    $scope.user = user;
  });

  Venture.get({ 'id': $stateParams.id }).$promise
    .then((venture) => {
      $scope.venture = venture;
      console.log(venture.price);
  });

  $scope.book = function(token) {

      console.log(token);
      var booking = $scope.booking;
      booking.price = $scope.venture.price;
      booking.venture = $scope.venture.id;
      booking.user = $scope.user.id;
      booking.token = token.id;


      console.log(booking);
      $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner><p>Booking your awesome venture</p>'
      });


      Venture.bookings.create({
        id: $scope.venture.id
      }, booking).$promise
      .then(function() {
        $state.go('myBooking.pending', {reload: true});
      })
      .catch(function(err) {
        $ionicPopup.alert({
          title: 'could not book',
          template: 'Try again soon'
        });
      })
      .finally(()=> {
        $ionicLoading.hide();
      });
  }


}

export default RequestToBookCTRL;