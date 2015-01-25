///<reference path='_all.ts' />
module login {
  'use strict';

  export class LoginCtrl {
    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      '$scope',
      '$auth'
    ];

    // dependencies are injected via AngularJS $injector
    // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
    constructor(private $scope,
                private $auth) {}

    authenticate = function (provider) {
      this.$auth.authenticate(provider)
        .then(function () {
          console.log("You have successfully logged in!");
        })
        .catch(function (response) {
          console.log("authenticate exception", response);
        });
    };

    log = function () {
      console.log('token', this.$auth.getPayload())
    };

    logout = function () {
      this.$auth.logout()
        .then(function () {
          console.log("logout");
        })
        .catch(function (response) {
          console.log("logout catch", response);
        });
    };
  }
}
