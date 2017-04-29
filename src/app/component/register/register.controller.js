'use strict';
function RegisterCTRL($scope, $state, Customer, $ionicHistory, $ionicPopup, $ionicLoading, GooglePlus, Facebook) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.loginGplus = function () {
    //make sure we have email verification
    let credentials = {};
    credentials.googlePlus = {}
    GooglePlus.login().then(function (authResult) {
        GooglePlus.getUser().then(function (user) {

          let credentials = {
            email: user.email,
            password: user.email + user.id
          };
          $scope.register(credentials)

        });
    }, function (err) {
        console.log(err);
    });
  };

  /**
   * Login
   */
  $scope.loginFb = function() {
    console.log("see if this button works");
    Facebook.login( function(response) {
      
      if (response.status == 'connected') {
        $scope.logged = true;
        $scope.me();
      }

    }, {scope: 'email'});
  };

 /**
  * me
  */
  $scope.me = function() {
    Facebook.api('/me', function(userInfo) {
      var credentials = {
        password: userInfo.email + userInfo.id,
        email: userInfo.email
      }
      $scope.register(credentials);

    }, {
        fields: 'email'
    });
  };


  $scope.register = function(user) {
    $ionicLoading.show({
      template: 'Loading...'
    });

    Customer.create(user).$promise
      .then( function(data) {
        $ionicPopup.alert({
          title: 'Account verification Needed',
          template: 'please check your email for a verification link'
        });
      })
      .catch(function(err) {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Problems creating account',
          template: err
        });
      }).
      finally(function() {
        $ionicLoading.hide()
      });
  }

}

export default RegisterCTRL;