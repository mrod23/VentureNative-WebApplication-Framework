'use strict';

import template from './myBooking.html';
import myBookingCtrl from './myBooking.controller.js';
import active from './active/active.js';
import history from './history/history.js';
import pending from './pending/pending.js';
import editBooking from './editBooking/editBooking.js';
import updateBooking from './updateBooking/updateBooking.js';

let compontent = angular.module('myBooking', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.myBooking', {
        url: "/myBooking",
        //abstract: true,
        views: {
          mainview:{
            template: template,
            controller: myBookingCtrl
          }
        }
       })
      .state('app.myBooking.active', active)
      .state('app.myBooking.pending', pending)
      .state('app.myBooking.history', history)
      .state('app.editMyBooking', editBooking)
      .state('app.updateMyBooking', updateBooking);


  });

export default compontent;
