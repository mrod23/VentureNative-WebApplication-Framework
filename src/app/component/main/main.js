'use strict';

import template from './nav.html';
import ctrl from './nav.controller.js';
import './nav.less';

let compontent = angular.module('nav', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: "",
        abstract: true,
        template: template,
        controller: ctrl,
        resolve: {
          user: function(Customer, $ionicLoading, $state, $ionicHistory) {
            $ionicLoading.show({
              template: '<ion-spinner icon="lines"></ion-spinner><p>Downloading Awesome Portal</p>'
            });

            if (Customer.isAuthenticated()) {
              return Customer.getCurrent()
                      .$promise
                      .catch(function() {

                        $ionicHistory.nextViewOptions({
                          disableBack: true
                        });
                        Customer.logout();
                        $state.go('app.home');
                      })
                      .finally(function() {
                        return $ionicLoading.hide();
                      });
            }
            else {
              $ionicLoading.hide();
              return {};
            }

          }
        }
      });

  });

export default compontent;