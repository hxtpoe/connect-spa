/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module stateModule {
  'use strict';

  var moduleName = 'stateModule',
    stateModule = angular.module(moduleName, [])
      .service(moduleName + '.UserStateService', UserStateService)
}
