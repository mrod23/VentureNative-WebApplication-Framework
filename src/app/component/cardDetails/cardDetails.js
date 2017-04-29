'use strict';

import template from './cardDetails.html';
import ctrl from './cardDetails.controller.js';

let compontent = angular.module('cardDetails', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.cardDetails', {
        url: "/cardDetails/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;