module login {
    'use strict';

    angular.module('connect')
        .controller('LoginCtrl', function ($scope, $auth) {
            $scope.authenticate = function(provider) {
                $auth.authenticate(provider)
                    .then(function() {
                        console.log("You have successfully logged in");
                    })
                    .catch(function(response) {
                        console.log("authenticate catch", response);
                    });
            };
            $scope.logout = function() {
                $auth.logout()
                    .then(function() {
                        console.log("logout");
                    })
                    .catch(function(response) {
                        console.log("logout catch", response);
                    });
            };
        });
}