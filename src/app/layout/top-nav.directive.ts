///<reference path='_all.ts' />
module layout {
  export function TopNavDrv($auth):ng.IDirective {
    return {
      //scope: {
      //  isAuth: false
      //},
      templateUrl: 'app/layout/layout.html',
      controller: function ($scope) {
        console.log("$scope", $scope);
      },
      link: ($scope) => {

        $scope.isAuth = {
          value: function () {
            return $auth.isAuthenticated();
          }
        }

        $scope.logout = () => {
          return $auth.logout(); // inject login service instead of $auth
        }
      }
    }
  }
}
