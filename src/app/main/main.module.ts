/// <reference path='_all.ts' />

/**
 * @type {angular.Module}
 */
module main {
  'use strict';

  var moduleName = 'mainModule',
    mainModule = angular.module(moduleName, [])
      .controller('MainCtrl', MainCtrl)
    ;
}
