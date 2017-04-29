'use strict';

import template from './host.html';
import ctrl from './host.controller.js';

let compontent = angular.module('host', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.host', {
        url: "/host/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;

