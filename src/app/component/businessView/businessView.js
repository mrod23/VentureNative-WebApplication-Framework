'use strict';

import template from './businessView.html';
import ctrl from './businessView.controller.js';
import listViewCTRL from './allJobs.controller.js';
import allJobsTemplate from './allJobs.html';
import currentJobsCTRL from './currentJobs.controller.js';
let compontent = angular.module('businessView', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.businessView', {
        url: "/businessView",
        abstract: true,
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      })
      .state('app.businessView.allJobs', {
        url: "/businessView/allJobs",
        views: {
          businessView:{
            template: allJobsTemplate,
            controller: listViewCTRL
          }
        }
      });

  });

export default compontent;