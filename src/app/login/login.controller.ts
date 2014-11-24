module main {
    'use strict';

    angular.module('connect')
        .controller('LoginCtrl', function ($scope, $auth) {

            $scope.click = function () {
                console.log("$auth.getPayload()", $auth.getPayload());

            }


            $scope.authenticate = function(provider) {
                $auth.authenticate(provider)
                    .then(function() {
                        console.log("You have successfully logged in");
                    })
                    .catch(function(response) {
                        console.log("xxx", response);
                    });
            };
            $scope.logout = function() {
                $auth.logout()
                    .then(function() {
                        console.log("logout");
                    })
                    .catch(function(response) {
                        console.log("yy", response);
                    });
            };
        });
}