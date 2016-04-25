/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module profileModule {
  'use strict';

  var moduleName = 'profileModule',
    profileModule = angular.module(moduleName, ['socialModule', 'stateModule'])
      .controller('ProfileCtrl', ProfileCtrl)
      .service(moduleName + '.UserProfileData', UserProfileDataProviderService)
      .directive(moduleName + 'Profile', () => {
        return ProfileDrv();
      })
      .directive(moduleName + 'MyFollowees', () => {
        return FolloweesBoxDrv();
      })
    ;
}
