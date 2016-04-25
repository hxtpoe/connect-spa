///<reference path='../_all.ts' />
module profileModule {
  export function FolloweesBoxDrv() {
    return {
      scope: {
        userId: '=',
      },
      templateUrl: 'app/profile/followees-box/followees-box-directive.html',
      controllerAs: 'followeesboxvm',
      controller: ['$scope', '$state', 'profileModule.UserProfileData', function ($scope, $state, UserProfileDataProvider:UserProfileDataProviderService) {
        UserProfileDataProvider.getFollowees(this.userId).then((data) => {
          this.followees = data.followees;
          this.numberOfFollowees = data.count;
        });

        this.usernameClickHandler = (userId) => {
          $state.go('profile', {userId: userId});
        };
      }],
      bindToController: true
    }
  }
}
