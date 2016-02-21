///<reference path='_all.ts' />
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
module login {
  'use strict';

  export class LoginService {

    public static $inject = [
      '$auth',
      'Restangular'
    ];

    constructor (private $auth, private Restangular) {
    }

    login(provider: String) {
      var self = this;
      this.$auth.authenticate(provider)
        .then(function (response) {
          self.Restangular.setDefaultHeaders({token: response.data.token});
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

    getUser() {
      return this.$auth.getPayload();
    }

    getUserId() {
      return this.$auth.getPayload().sub.substring(6);
    }
  }
}
