///<reference path='_all.ts' />

module login {
  'use strict';

  export class LoginCtrl {

    public static $inject = [
      '$scope',
      'LoginService'
    ];

    constructor(private $scope, public loginService:LoginService) {}

    authenticate = function (provider) {
      this.loginService.login(provider);
    };

    log = function () {
      console.log('user from token', this.loginService.getUser())
    };

    logout = function () {
      this.loginService.logout()
    };
  }
}
