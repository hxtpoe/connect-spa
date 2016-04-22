///<reference path='_all.ts' />

module stateModule {
  'use strict';

  export class UserStateService {

    public static $inject = [
      'LoginService'
    ];

    public profile;

    constructor(private LoginService) {
    }

    public isMyFollowee(userId) {
      return false;
    }
  }
}
