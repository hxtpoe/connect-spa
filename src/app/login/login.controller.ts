///<reference path='_all.ts' />

module login {
  'use strict';

  export class LoginCtrl {

    public static $inject = [
      '$scope',
      'LoginService'
    ];

    constructor(private $scope, public loginService:LoginService) {
    }

    authenticate = function (provider) {
      this.loginService.login(provider).
      catch((response) => {
        console.log("authenticate exception", response);
      }).
      then(() => {
          this.$scope.$parent.$hide();
        }
      );
    };

    logout = function () {
      this.loginService.logout()
    };
  }
}
