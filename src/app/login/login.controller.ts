///<reference path='_all.ts' />

module login {
  'use strict';

  export class LoginCtrl {

    public static $inject = [
      '$scope',
      'LoginService',
      '$state'
    ];

    constructor(private $scope, public loginService:LoginService, private $state) {
    }

    authenticate = function (provider) {
      this.loginService.login(provider).
      catch((response) => {
        console.log("authenticate exception", response);
      }).
      then(() => {
          this.$scope.$parent.$hide();
          this.$state.go('wall')
        }
      );
    };

    logout = function () {
      this.loginService.logout()
    };
  }
}
