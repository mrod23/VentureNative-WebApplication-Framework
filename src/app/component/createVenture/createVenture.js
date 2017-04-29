'use strict';

import createVentureTemplate from './createVenture.html';
import createVentureCtrl from './createVenture.controller.js';
import './main.less';


let compontent = angular.module('createVenture', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.createVenture', {
        url: "/createVenture",
        views: {
          mainview:{
            template: createVentureTemplate,
            controller: createVentureCtrl
          }
        }
      });

  });

export default compontent;
