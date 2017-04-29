'use strict';

import template from './template.html';
import editBookingCTRL from './editBooking.controller.js';

export default {
  url: "/editBooking/:id",
  views: {
    mainview:{
      template: template,
      controller: editBookingCTRL
    }
  }

};
