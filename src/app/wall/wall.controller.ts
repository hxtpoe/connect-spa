///<reference path='_all.ts' />
module wall {
  'use strict';

  export class WallCtrl {
    public static $inject = [
      '$scope',
      'WallDataService',
      '$auth'
    ];

    private tweet: String;
    private a;

    constructor(private $scope, private WallDataService:wall.WallDataService, private $auth) {
      this.WallDataService.getByName().then((data) => {
        this.a = data
      });
    }

    get newTweet():String {
      return this.tweet;
    }

    set newTweet(value:String) {
      this.tweet = value;
    }

    get array() {
      return this.a;
    }

    publishTweet() {

      this.WallDataService.add({message: this.newTweet, author: this.$auth.getPayload().sub}).then(
        () => {
          this.a.unshift({message: this.newTweet, author: this.$auth.getPayload().sub});
          this.newTweet = '';
        }
      );
    }
  }
}
