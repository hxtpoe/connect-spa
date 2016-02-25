/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="_all.ts" />

/**
 @type {angular.Module}
 */
module app {
  import LoginService = login.LoginService;
  'use strict';

  angular.module('connect', [
      'ngAnimate',
      'mgcrea.ngStrap',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'satellizer',
      'restangular',
      'loginModule',
      'mainModule',
      'wallModule',
      'layoutModule'
    ])
    .config(function ($authProvider) {
      $authProvider.facebook({
        url: 'http://localhost:9000/auth/facebook',
        clientId: '781458691925425',
        scope: 'email',
        scopeDelimiter: ',',
        requiredUrlParams: ['scope'],
        popupOptions: {width: 640, height: 480}
      });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl as mainCtrl'
        })
        .state('wall', {
          url: '/wall',
          templateUrl: 'app/wall/wall.html',
          controller: 'WallCtrl as wallCtrl',
          data: {
            requireLogin: true
          }
        });
      $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider:restangular.IProvider) {
      RestangularProvider.setBaseUrl('http://localhost:9000/api/');
    })
    .run(function ($rootScope, LoginService, $state) {

      $rootScope.$on('$stateChangeStart', function (event, toState) {
        var requireLogin = false;
        try {
          requireLogin = toState.data.requireLogin;
        } catch (e) {
        }

        if (requireLogin && !LoginService.isAuthenticated()) {
          event.preventDefault();
          $state.go('home')
        }
      });

    });
}
