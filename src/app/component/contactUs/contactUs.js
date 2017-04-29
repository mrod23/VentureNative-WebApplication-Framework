'use strict';

import template from './contactUs.html';
import ctrl from './contactUs.controller.js';


let compontent = angular.module('contactUs', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.contactUs', {
        url: "/contactUs",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }    
      });

  });

export default compontent;