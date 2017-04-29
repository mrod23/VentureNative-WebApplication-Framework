import ngResource from 'angular-resource';
import lbServices from './lb-services';

export default angular
  .module('sos.services', ['ngResource', lbServices])
  .config(function(LoopBackResourceProvider) {
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase(ENV.apiUrl);
    LoopBackResourceProvider.setAuthHeader('Authorization');
  });