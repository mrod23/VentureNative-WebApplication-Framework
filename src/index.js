import _ from 'underscore';
import nav from './app/component/main/main.js';
import register from './app/component/register/register.js';
import uploads from './app/component/uploads/uploads.js';
import home from './app/component/home/home.js';
import profile from './app/component/profile/profile.js';
import businessView from './app/component/businessView/businessView.js'
import paymentSettings from './app/component/paymentSettings/paymentSettings.js';
import cardDetails from './app/component/cardDetails/cardDetails.js';
import cardSettings from './app/component/cardSettings/cardSettings.js';

import services  from './app/services/index.js';

//new line
import ventureOptions from './app/component/ventureOptions/ventureOptions.js';
import ventureDetails from './app/component/ventureDetails/ventureDetails.js';
import host from './app/component/host/host.js';
import createVenture from './app/component/createVenture/createVenture.js';
import createHost from './app/component/createHost/createHost.js';
import testPage from './app/component/testPage/testPage.js';
import aboutUs from './app/component/aboutUs/aboutUs.js';
import becomeAHost from './app/component/becomeAHost/becomeAHost.js';
import contactUs from './app/component/contactUs/contactUs.js';
import requestToBook from './app/component/requestToBook/requestToBook.js';
import manageBooking from './app/component/manageBooking/manageBooking.js';
import myBooking from './app/component/myBooking/myBooking.js';
import manageVenture from './app/component/manageVenture/manageVenture.js';
import cityOptions from './app/component/cityOptions/cityOptions.js';


import '../bower_components/ionic-material/dist/ionic.material.css';
import '../bower_components/ion-google-place/ion-google-place.css';
import '../bower_components/ionic/release/css/ionic.css';
import './app/styles/main.less';
import directives from './app/directives/index.js';
import gapi from 'angular-google-plus';
import facebook from 'angular-facebook';
angular
  .module('sos', [
    'facebook',
    'googleplus',
    'ionic',
    'ion-google-place',
    'ionic-material',
    services.name,
    directives.name,
    nav.name,
    register.name,
    home.name,
    uploads.name,
    paymentSettings.name,
    profile.name,
    businessView.name,
    cardDetails.name,
    cardSettings.name,
    ventureOptions.name,
    ventureDetails.name,
    host.name,
    createVenture.name,
    createHost.name,
    testPage.name,
    aboutUs.name,
    becomeAHost.name,
    contactUs.name,
    requestToBook.name,
    manageBooking.name,
    myBooking.name,
    manageVenture.name,
    cityOptions.name
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ionicConfigProvider,
        $httpProvider, $compileProvider) {
    $urlRouterProvider
      .otherwise('/home');


    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype|whatsapp):/);
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $ionicConfigProvider.tabs.position('bottom')
  })
  .factory('authInterceptor', function ($rootScope, $q, $window, $location, LoopBackAuth) {
    return {
      // Add authorization token to headers
      responseError: function(rejection) {
        if (rejection.status == 401) {
          //Now clearing the loopback values from client browser for safe logout...
          LoopBackAuth.clearUser();
          LoopBackAuth.clearStorage();
          $location.nextAfterLogin = $location.path();
          $location.path('/auth');
        }
        return $q.reject(rejection);
      }
    };
  })

  .config(function (GooglePlusProvider, $httpProvider, FacebookProvider) {
    let myAppId = ENV.fb;
    GooglePlusProvider.init({
      clientId:ENV.googleID,
      apiKey:  ENV.googleKey,
      scopes: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
    });
     $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];


     FacebookProvider.init(myAppId);

  })
  .filter('groupBy', function() {
    return _.memoize(function(items, field) {
            return _.groupBy(items, field);
        }
    );
  });