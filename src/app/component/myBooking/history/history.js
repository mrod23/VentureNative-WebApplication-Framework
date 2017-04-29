'use strict';

import template from './history.html';
import historyCtrl from './history.controller.js';

export default {
  url: "/history",
  views: {
    "history-tab":{
      template: template,
      controller: historyCtrl
    }
  }
};