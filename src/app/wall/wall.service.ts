///<reference path='../_all.ts' />

module wall {
  'use strict';

  export class WallDataService {

    private tweet;

    public static $inject = [
      "Restangular"
    ];

    constructor (private restangular) {
      this.tweet = restangular.one('tweet/2');
      restangular.setDefaultHeaders({token: "dupamaryna"})
    }

    getLatests() {
      this.tweet.get().then(function(data) {
        console.log("data", data)
      });
    }
  }
}
