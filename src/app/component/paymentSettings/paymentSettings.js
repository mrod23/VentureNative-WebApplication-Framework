'use strict';

import template from './paymentSettings.html';
import ctrl from './paymentSettings.controller.js';

let compontent = angular.module('paymentSettings', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.paymentSettings', {
        url: "/paymentSettings",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;