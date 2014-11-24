/// <reference path="../../typings/tsd.d.ts" />

module app {
    'use strict';

    angular.module('connect', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'satellizer'])

        .config(function($authProvider) {
            $authProvider.facebook({
                url: 'http://dev.ioki.com.pl/login.php',
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
