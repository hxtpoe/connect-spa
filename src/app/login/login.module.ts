/// <reference path='_all.ts' />

/**
 * @type {angular.Module}
 */
module login {
  'use strict';

  var moduleName = 'loginModule',
    loginModule = angular.module(moduleName, [])
      .controller('LoginCtrl', LoginCtrl)
    ;
}
