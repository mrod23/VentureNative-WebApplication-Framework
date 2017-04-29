'use strict';
function LoginCTRL($scope, $state, Customer, $location, $ionicHistory, $ionicPopup, $ionicLoading, GooglePlus, Facebook) {


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
        $scope.login(credentials)

      });
    }, function (err) {
        console.log(err);
    });
  };



  /**
   * Login
   */
  $scope.loginFB = function() {
    Facebook.login( function(response) {
      debugger;
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

      userInfo.password = userInfo.email + userInfo.id;
      $scope.login(userInfo);

    }, {
        fields: 'email'
    });
  };

  $scope.login = function(user) {

    $ionicLoading.show({
      template: 'Loading...'
    });;


    Customer.login(user).$promise
      .then(function(response) {
        var next = $location.nextAfterLogin || '/home';
        $location.nextAfterLogin = null;
        $scope.$emit("loggedIn");
        $location.path(next);
      })
      .catch(function(err) {
        $ionicPopup.alert({
          title:'Couldnt log in',
          subTitle: err.data.error.message
        });
      })
      .finally(function() {
        $ionicLoading.hide();
      });

  }

}

export default LoginCTRL;