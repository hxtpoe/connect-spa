/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module login {
  'use strict';

  var moduleName = 'loginModule',
    loginModule = angular.module(moduleName, [])
      .controller('LoginCtrl', LoginCtrl)
      .service('LoginService', ["$auth", function($auth) {return new LoginService($auth);}])
    ;
}
