///<reference path='_all.ts' />
///<reference path='../login/login.service.ts' />

module socialModule {
  'use strict';

  export class PostsDataService {
    tweet;
    allTweets;
    create;
    getUserPostsById;

    public static $inject = [
      'Restangular',
      '$auth',
      'LoginService'
    ];

    constructor(private restangular, private $auth, public loginService:login.LoginService) {
      this.allTweets = restangular.one('user/' + this.loginService.getUserId() + '/timeline');
      this.getUserPostsById = function (userId) {
        return restangular.one('user/' + userId + '/posts');
      };
      this.create = restangular.all('user/' + this.loginService.getUserId() + '/posts');
    }

    getLatests() {
      return this.tweet.get();
    }

    getByUserId(userId) {
      return this.getUserPostsById(userId).get();
    }

    add(element) {
      return this.create.post({message: element.message, t: "tweet", author: element.author});
    }
  }
}
