'use strict';

import template from './pending.html';
import pendingCtrl from './pending.controller.js';


export default {
  url: "/pending",
  views: {
    "pending-tab":{
      template: template,
      controller: pendingCtrl
    }
  }
};
