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

        this.canBeMyFollowee = (userId) => {
          return UserStateService.canBeMyFollowee(userId);
        }

        this.followClickHandler = (foloweeUserId) => {
          UserProfileDataProvider.follow(UserStateService.authenticatedUserId, foloweeUserId);
          UserStateService.reloadProfile();
          // @ToDo fix binding
        };

        this.unfollowClickHandler = (foloweeUserId) => {
          UserProfileDataProvider.unfollow(UserStateService.authenticatedUserId, foloweeUserId);
          UserStateService.reloadProfile();
          // @ToDo fix binding
        };
      }],
      bindToController: true
    }
  }
}
