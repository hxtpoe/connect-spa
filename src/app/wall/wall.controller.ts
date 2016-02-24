///<reference path='_all.ts' />
module wall {
  'use strict';

  export class WallCtrl {
    public static $inject = [
      '$scope',
      'WallDataService',
      '$auth',
      '$window',
      '$http'
    ];

    private tweet:String;
    private posts:Array<Object> = [];
    private nextPage:String;
    private endOfTimeline:Boolean = false;

    constructor(private $scope, private WallDataService, private $auth, private $window, private $http, private $filter) {
      this.WallDataService.getByName().then((data) => {
        this.posts = data.posts;
        this.posts.forEach((post) => {
          post.createdAt = new Date(post.createdAt).getTime();
        });
        this.nextPage = data.nextPage;
      });
    }

    getNextPage() {
      this.$http.get('http://localhost:9000' + this.nextPage).then(
        (data) => {
          this.nextPage = data.data.nextPage;
          this.posts = this.posts.concat(data.data.posts);
          this.posts.forEach((post) => {
            post.createdAt = new Date(post.createdAt).getTime();
          });


        }
      ).catch((data) => {
        if (data.status == 404) {
          this.endOfTimeline = true;
        }
      });
    }

    get message():String {
      return this.tweet;
    }

    set message(value:String) {
      this.tweet = value;
    }

    get getPosts() {
      return this.posts;
    }

    publish() {
      this.WallDataService.add({message: this.message}).then(
        () => {
          console.log("this.posts", this.posts);
          this.posts.unshift({message: this.message, userId: this.$auth.getPayload().sub});
          this.message = null;
        }
      );
    }
  }
}
