'use strict';

import template from './becomeAHost.html';
import ctrl from './becomeAHost.controller.js';


let compontent = angular.module('becomeAHost', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.becomeAHost', {
        url: "/becomeAHost",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }    
      });

  });

export default compontent;