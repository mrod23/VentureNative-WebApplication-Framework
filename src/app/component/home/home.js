'use strict';

import template from './home.html';
import ctrl from './home.controller.js';
import './main.less'

let compontent = angular.module('home', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.home', {
        url: "/home",
        views: {
          mainview:{
            template: template,
            controller: ctrl
          }
        }
      });

  });

export default compontent;