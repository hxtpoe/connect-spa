///<reference path='../_all.ts' />
module socialModule {
  export function PostDirective() {
    return {
      scope: {
        message: '=',
        userId: '=',
        createdAt: '='
      },
      templateUrl: 'app/social/post/post-directive.html',
      controllerAs: 'postvm',
      controller: function ($state) {
        this.postUserClickHandler = (userId) => {
          $state.go('profile', {userId: userId.split("::")[1]});
        }
      },
      bindToController: true,

    }
  }
}
