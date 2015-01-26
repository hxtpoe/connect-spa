/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="_all.ts" />

/**
 @type {angular.Module}
 */
module app {
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
  ])
    .config(function ($authProvider) {
      $authProvider.facebook({
        url: 'http://localhost:9000/auth/facebook',
        clientId: '781458691925425'
      });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl as mainCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginCtrl as loginCtrl'
        })
        .state('wall', {
          url: '/wall',
          templateUrl: 'app/wall/wall.html',
          controller: 'WallCtrl as wallCtrl'
        });
      $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider: restangular.IProvider) {
      RestangularProvider.setBaseUrl('http://localhost:9000/api/');
      RestangularProvider.setExtraFields(['name']);
    });
}
