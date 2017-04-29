'use strict';

import template from './testPage.html';
import ctrl from './testPage.controller.js';
//import fab from './fab.html';
//import fabCtrl from './fab.controller.js';

let compontent = angular.module('testPage', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.testPage', {
        url: "/testPage",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }    
      });

  });

export default compontent;