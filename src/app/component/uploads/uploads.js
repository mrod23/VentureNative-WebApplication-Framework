'use strict';

import template from './uploads.html';
import ctrl from './uploads.controller.js';

let compontent = angular.module('uploads', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.uploads', {
        url: "/upload/:type/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;