'use strict';

import template from './manageVenture.html';
import manageVentureCtrl from './manageVenture.controller.js';
import editVenture from './editVenture/editVenture.js';

let compontent = angular.module('manageVenture', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.manageVenture', {
        url: "/manageVenture",
        views: {
          mainview:{
            template: template,
            controller: manageVentureCtrl
          }
        }
       })
      .state('app.editVenture', editVenture);


  });

export default compontent;
