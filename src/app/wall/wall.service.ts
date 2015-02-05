///<reference path='../_all.ts' />

module wall {
  'use strict';

  export class WallDataService {

    private tweet;
    private allTweets;
    private create;

    public static $inject = [
      "Restangular",
      "$auth"
    ];

    constructor (private restangular, private $auth) {
      this.tweet = restangular.one('tweet/2');
      this.allTweets = restangular.all('tweet/user/' + $auth.getPayload().sub);
      this.create = restangular.all('tweet');
    }

    getLatests() {
      return this.tweet.get();
    }

    getByName() {
      return this.allTweets.getList();
    }

    add(element) {
      return this.create.post({ message: element.message, t: "tweet", author: element.author });
    }
  }
}
