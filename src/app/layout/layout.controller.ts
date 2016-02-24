///<reference path='_all.ts' />
module layout {
  'use strict';

  export class LayoutCtrl {
    public static $inject = [
      '$scope',
      '$http'
    ];

    constructor(private $scope, private $http) {
    }
  }
}
