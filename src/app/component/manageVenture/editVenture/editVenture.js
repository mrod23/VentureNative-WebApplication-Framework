'use strict';

import template from './template.html';
import editVentureCTRL from './editVenture.controller.js';

export default {
  url: "/editVenture/:id",
  views: {
    mainview:{
      template: template,
      controller: editVentureCTRL
    }
  }

};
