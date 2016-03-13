/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module wall {
  'use strict';

  var moduleName = 'wallModule',
    wallModule = angular.module(moduleName, ['socialModule'])
      .controller('WallCtrl', WallCtrl)
    ;
}
