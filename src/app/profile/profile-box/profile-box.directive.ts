///<reference path='../_all.ts' />
module profileModule {
  export function ProfileDrv() {
    return {
      scope: {
        userId: '='
      },
      templateUrl: 'app/profile/profile-box/profile-box-directive.html',
      controllerAs: 'profileboxvm',
      controller: ['$scope', 'profileModule.UserProfileData', 'stateModule.UserStateService', '$timeout', function ($scope, UserProfileDataProvider, UserStateService, $timeout) {
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
          UserProfileDataProvider.follow(UserStateService.authenticatedUserId, foloweeUserId).then(() => {
            UserStateService.reloadProfile();
            $timeout(function() {
              $scope.$apply();
            });
          });
        };

        this.unfollowClickHandler = (foloweeUserId) => {
          UserProfileDataProvider.unfollow(UserStateService.authenticatedUserId, foloweeUserId).then(() => {
            UserStateService.reloadProfile();
            $timeout(function() {
              $scope.$apply();
            });
          });
        };
      }],
      bindToController: true
    }
  }
}
