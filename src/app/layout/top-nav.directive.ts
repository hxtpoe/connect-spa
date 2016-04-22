///<reference path='_all.ts' />
module layout {
  //import LoginService = LoginService;
  export function TopNavDrv() {
    return {
      templateUrl: 'app/layout/top-menu.html',
      bindToController: true,
      controllerAs: 'topnavvm',
      controller: ['$scope', 'LoginService', '$state', 'stateModule.UserStateService', function ($scope, LoginService, $state, UserStateService) {
        this.profileClickHandler = () => {
          $state.go('profile', {userId: LoginService.getUserId()});
        };

        this.isAuth = {
          value: function () {
            return LoginService.isAuthenticated();
          }
        };

        this.username = () => {
          if (UserStateService.profile) {
            return UserStateService.profile.first_name + ' ' + UserStateService.profile.last_name;
          }
        };

        this.logout = () => {
          return LoginService.logout(); // inject login service instead of $auth
        };
      }],
    }
  }
}
