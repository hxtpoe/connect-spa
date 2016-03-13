/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module profile {
  'use strict';

  var moduleName = 'profileModule',
    profileModule = angular.module(moduleName, ['socialModule'])
      .controller('ProfileCtrl', profile.ProfileCtrl)
    ;
}
