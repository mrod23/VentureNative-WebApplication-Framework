'use strict';

import template from './editProfile.html';
import ctrl from './editProfile.controller.js';

let compontent = angular.module('editProfile', [])
  .config(function($stateProvider,t $urlRouterProvider) {

    $stateProvider
      .state('app.editProfile', {
        url: "/editProfile",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;