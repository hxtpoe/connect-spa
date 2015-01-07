/// <reference path="../../typings/tsd.d.ts" />

module app {
    'use strict';

    angular.module('connect', ['ngAnimate', 'mgcrea.ngStrap', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'satellizer'])

        .config(function($authProvider) {
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
                    controller: 'MainCtrl'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'app/main/test.html'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginCtrl'
                });

            $urlRouterProvider.otherwise('/');
        })
}
