module main {
    'use strict';

    angular.module('connect')
        .controller('MainCtrl', function ($scope) {
            $scope.awesomeThings = [
                {
                    'key': 'angular',
                    'title': 'AngularJS',
                    'url': 'https://angularjs.org/',
                    'description': 'HTML enhanced for web apps!',
                    'logo': 'angular.png'
                }
            ];
        });
}