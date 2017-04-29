'use strict';

import template from './ventureDetails.html';
import ctrl from './ventureDetails.controller.js';
import './ventureDetails.less';

let compontent = angular.module('ventureDetails', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.ventureDetails', {
        url: "/ventureDetails/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;

