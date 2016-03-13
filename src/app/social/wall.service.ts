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
      '$auth',
      'LoginService'
    ];

    constructor(private restangular, private $auth, public loginService:login.LoginService) {
      this.allTweets = restangular.one('user/' + this.loginService.getUserId() + '/timeline');
      this.create = restangular.all('user/' + this.loginService.getUserId() + '/posts');
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
