///<reference path='_all.ts' />
///<reference path='../login/login.service.ts' />

module socialModule {
  'use strict';

  export class WallDataService {

    private tweet;
    private allTweets;
    private create;

    public static $inject = [
      'Restangular',
      'stateModule.UserStateService'
    ];

    constructor(public restangular, public UserStateService) {
      this.allTweets = restangular.one('user/' + this.UserStateService.authenticatedUserId + '/timeline');
      this.create = restangular.all('user/' + this.UserStateService.authenticatedUserId + '/posts');
    }

    getLatests() {
      return this.tweet.get();
    }

    getByName() {
      return this.allTweets.get();
    }

    add(element) {
      return this.create.post({message: element.message, t: "tweet", author: element.author});
    }
  }
}
