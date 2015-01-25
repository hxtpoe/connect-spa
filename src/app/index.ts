/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="_all.ts" />
/// <reference path="login/_all.ts" />

/**
 @type {angular.Module}
 */
module app {
  'use strict';

  angular.module('connect', [
    'loginModule',
    'mainModule',
    'ngAnimate',
    'mgcrea.ngStrap',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'satellizer'
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
        });

      $urlRouterProvider.otherwise('/');
    });
}
