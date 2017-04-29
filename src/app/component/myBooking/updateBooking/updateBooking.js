'use strict';

import template from './updateBooking.html';
import updateBookingCTRL from './updateBooking.controller.js';

export default {
  url: "/updateMyBooking/:id",
  views: {
    mainview:{
      template: template,
      controller: updateBookingCTRL
    }
  }

};
