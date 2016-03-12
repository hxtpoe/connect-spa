/// <reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * @type {angular.Module}
 */
module socialModule {
  'use strict';

  var moduleName = 'socialModule',
    socialModule = angular.module(moduleName, [])
      .service(moduleName + '.WallDataService', WallDataService)
      .service(moduleName + '.PostsDataService', PostsDataService)
      .directive(moduleName + 'Post', () => {
        return  PostDirective();
      });
}
