///<reference path='_all.ts' />
module main {
  'use strict';

  export class MainCtrl {
    public static $inject = [
      '$scope',
      '$http'
    ];

    public numberOfUsers:Int;

    constructor(private $scope, private $http) {
      this.init();
    }

    getNumberOfUsers() {
      this.$http.get('http://localhost:9000/api/users/count').then((data) => {
        this.numberOfUsers = data.data.count;
      });
    };

    init() {
      this.getNumberOfUsers();
    };
  }
}
