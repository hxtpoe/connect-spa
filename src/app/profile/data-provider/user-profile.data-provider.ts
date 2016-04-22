///<reference path='../_all.ts' />

module profileModule {
  'use strict';

  export class UserProfileDataProviderService {

    public static $inject = [
      'Restangular'
    ];

    constructor(private restangular) {
    }

    getProfile(userId:number) {
      return this.restangular.one('user', userId).get();
    }

    getExtendedProfile(userId:number) {
      return this.restangular.one('user', userId).one('extendedProfile').get();
    }

    getFollowees(userId:number) {
      return this.restangular.one('user', userId).one('followees').get();
    }
  }
}
