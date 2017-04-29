'use strict';

import template from './aboutUs.html';
import ctrl from './aboutUs.controller.js';


let compontent = angular.module('aboutUs', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.aboutUs', {
        url: "/aboutUs",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }    
      });

  });

export default compontent;