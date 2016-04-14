///<reference path='../_all.ts' />
module profileModule {
  export function ProfileDrv() {
    return {
      scope: {
        userId: '='
      },
      templateUrl: 'app/profile/profile-box/profile-box-directive.html',
      controllerAs: 'profileboxvm',
      controller: ['$scope', 'profileModule.UserProfileData', function ($scope, UserProfileDataProvider) {
        console.log("$scope.userId", this.userId);
        UserProfileDataProvider.getProfile().then((data) => {
          console.log("data", data);
          this.fullProfile = data;
        })
      }],
      bindToController: true
    }
  }
}
