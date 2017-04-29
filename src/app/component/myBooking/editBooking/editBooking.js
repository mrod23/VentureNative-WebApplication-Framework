'use strict';

import template from './template.html';
import editBookingCTRL from './editBooking.controller.js';

export default {
  url: "/editMyBooking/:id",
  views: {
    mainview:{
      template: template,
      controller: editBookingCTRL
    }
  }

};
