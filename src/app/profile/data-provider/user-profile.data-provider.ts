///<reference path='../_all.ts' />

module profileModule {
  'use strict';

  export class UserProfileDataProviderService {

    private profile;

    public static $inject = [
      'Restangular'
    ];

    constructor(private restangular) {
      this.profile = restangular.one('user/1');
    }

    getProfile() {
      return this.profile.get();
    }

  }
}
