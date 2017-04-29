'use strict';

import template from './manageBooking.html';
import manageBookingCtrl from './manageBooking.controller.js';
import active from './active/active.js';
import history from './history/history.js';
import pending from './pending/pending.js';
import editBooking from './editBooking/editBooking.js';
import updateBooking from './updateBooking/updateBooking.js';

let compontent = angular.module('manageBooking', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.manageBooking', {
        url: "/manageBooking",
        //abstract: true,
        views: {
          mainview:{
            template: template,
            controller: manageBookingCtrl
          }
        }
       })
      .state('app.manageBooking.active', active)
      .state('app.manageBooking.pending', pending)
      .state('app.manageBooking.history', history)
      .state('app.editBooking', editBooking)
      .state('app.updateBooking', updateBooking);


  });

export default compontent;
