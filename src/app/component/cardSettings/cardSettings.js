'use strict';

import template from './cardSettings.html';
import ctrl from './cardSettings.controller.js';

let compontent = angular.module('cardSettings', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.cardSettings', {
        url: "/cardSettings/:id?",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;