'use strict';

import template from './profile.html';
import ctrl from './profile.controller.js';

let compontent = angular.module('profile', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.profile', {
        url: "/profile",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;