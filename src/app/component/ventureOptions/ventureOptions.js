'use strict';

import template from './ventureOptions.html';
import ctrl from './ventureOptions.controller.js';

let compontent = angular.module('ventureOptions', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.ventureOptions', {
        url: "/ventureOptions",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;

