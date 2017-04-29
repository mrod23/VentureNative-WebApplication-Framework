'use strict';

import template from './auth.html';
import signInCTRL from './login.controller.js';
import signUpCTRL from './register.controller.js';
import './main.less';

let compontent = angular.module('auth', [])
  .config(function($stateProvider) {

    $stateProvider
      .state('app.auth', {
        url: "/auth",
        views: {
          mainview:{
            template: template
          }
        }
      });

  })
    .controller('signUpCTRL', signUpCTRL)
    .controller('signInCTRL', signInCTRL);

export default compontent;