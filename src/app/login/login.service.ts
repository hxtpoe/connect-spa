///<reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
module login {
  'use strict';

  export class LoginService {

    public static $inject = [
      '$auth'
    ];

    constructor (private $auth) {
    }

    login(provider: String) {
      this.$auth.authenticate(provider)
        .then(function () {
          console.log("You have successfully logged in!");
        })
        .catch(function (response) {
          console.log("authenticate exception", response);
        });
    }

    logout() {
      this.$auth.logout()
        .then(function () {
          console.log("logout");
        })
        .catch(function (response) {
          console.log("logout catch", response);
        });
    }

    getUser():String {
      return this.$auth.getPayload();
    }
  }
}
