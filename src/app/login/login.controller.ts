///<reference path='_all.ts' />

module login {
  import UserStateService = stateModule.UserStateService;
  import UserProfileDataProviderService = profileModule.UserProfileDataProviderService;
  'use strict';

  export class LoginCtrl {

    public static $inject = [
      '$scope',
      'LoginService',
      '$state',
      'stateModule.UserStateService',
      'profileModule.UserProfileData'
    ];

    constructor(private $scope, private loginService:LoginService, private $state, private UserStateService:UserStateService, private ProfileDataProvider:UserProfileDataProviderService) {
    }

    authenticate = (provider) => {
      this.loginService.login(provider).
      catch((response) => {
        console.log("authenticate exception", response);
      }).
      then(() => {
          this.ProfileDataProvider.getExtendedProfile( this.loginService.getUserId()).then((responseData) => {
            this.UserStateService.authenticatedUserId = this.loginService.getUserId();
            this.UserStateService.profile = responseData.plain();
            this.$scope.$parent.$hide();
            this.$state.go('wall')
          });
        }
      );
    };

    logout = () => {
      this.loginService.logout()
    };
  }
}
