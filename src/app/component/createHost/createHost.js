'use strict';

import createHostTemplate from './createHost.html';
import createHostCtrl from './createHost.controller.js';

let compontent = angular.module('createHost', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.createHost', {
        url: "/createHost",
        views: {
          mainview:{
            template: createHostTemplate,
            controller: createHostCtrl
          }
        }
      });
      
  });

export default compontent;
