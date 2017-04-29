'use strict';

import template from './requestToBook.html';
import ctrl from './requestToBook.controller.js';

let compontent = angular.module('requestToBook', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.requestToBook', {
        url: "/requestToBook/:id",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;

