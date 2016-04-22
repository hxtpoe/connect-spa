///<reference path='../_all.ts' />
module profileModule {
  export function ProfileDrv() {
    return {
      scope: {
        userId: '='
      },
      templateUrl: 'app/profile/profile-box/profile-box-directive.html',
      controllerAs: 'profileboxvm',
      controller: ['$scope', 'profileModule.UserProfileData', 'stateModule.UserStateService', function ($scope, UserProfileDataProvider, UserStateService) {
        UserProfileDataProvider.getProfile(this.userId).then((data) => {
          this.fullProfile = data;
        });

        this.isMyFollowee = (userId) => {
          return UserStateService.isMyFollowee(userId);
        }
      }],
      bindToController: true
    }
  }
}
