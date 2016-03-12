/// <reference path='_all.ts' />

/**
 * @type {angular.Module}
 */
module layout {
  'use strict';

  var moduleName = 'layoutModule',
    layoutModule = angular.module(moduleName, [])
      .controller('LayoutCtrl', LayoutCtrl)
      .directive('topNav', ($auth) => {
        return TopNavDrv($auth);
      })
    ;
}
