///<reference path='_all.ts' />

module stateModule {
  'use strict';

  export class UserStateService {

    public static $inject = [
      'LoginService',
      'profileModule.UserProfileData'
    ];

    constructor(private LoginService, private UserProfileData) {
    }

    public canBeMyFollowee(userId) {
      return userId !== this.authenticatedUserId;
    }

    public isMyFollowee(userId) {
      var followees = this.profile.followees || [];

      return followees.indexOf(String(userId)) > 0;
    }

    public get profile() {
      return JSON.parse(localStorage.getItem('profile'));
    }

    public reloadProfile() {
      this.UserProfileData.getExtendedProfile(this.authenticatedUserId).then((data) => {
        this.profile = data.plain();
      });
    }

    public set profile(value) {
      localStorage.setItem('profile', JSON.stringify(value));
    }

    public get authenticatedUserId() {
      return JSON.parse(localStorage.getItem('authenticatedUserId'))
    }

    public set authenticatedUserId(value) {
      localStorage.setItem('authenticatedUserId', JSON.stringify(value));
    }
  }
}
