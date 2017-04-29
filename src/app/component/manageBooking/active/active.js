'use strict';

import template from './active.html';
import activeCtrl from './active.controller.js';

export default {
  url: "/active",
  views: {
    "active-tab":{
      template: template,
      controller: activeCtrl
    }
  }

};
