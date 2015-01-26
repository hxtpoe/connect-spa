///<reference path='_all.ts' />
module wall {
  'use strict';

  export class WallCtrl {
    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      '$scope',
      'WallDataService'
    ];

    // dependencies are injected via AngularJS $injector
    // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
    constructor(private $scope, private WallDataService) {
      console.log("wallCtrl");
    }

    test() {
      console.log("xxx", this.WallDataService.getLatests());
    }
  }
}
