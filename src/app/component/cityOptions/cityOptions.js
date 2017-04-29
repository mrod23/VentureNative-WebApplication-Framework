'use strict';

import template from './cityOptions.html';
import ctrl from './cityOptions.controller.js';

let compontent = angular.module('cityOptions', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.cityOptions', {
        url: "/cityOptions/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;

