///<reference path='_all.ts' />
module profileModule {
  import PostModel = socialModule.PostModel;
  'use strict';

  export class ProfileCtrl {
    public static $inject = [
      '$scope',
      'socialModule.PostsDataService',
      '$auth',
      '$window',
      '$http',
      '$stateParams'
    ];

    private tweet:string;
    private posts:Array<PostModel> = [];
    private nextPage:string;
    private endOfTimeline:Boolean = false;

    constructor(private $scope, private PostsDataService, private $auth, private $window, private $http, private $stateParams) {
      this.PostsDataService.getByUserId($stateParams.userId).then((data) => {
        this.posts = data.posts;
        this.posts.forEach((post) => {
          post.createdAt = new Date(post.createdAt).getTime();
        });
        this.nextPage = data.nextPage;

        console.log("$stateParams", $stateParams.userId);
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

    get message():string {
      return this.tweet;
    }

    set message(value:string) {
      this.tweet = value;
    }

    get getPosts() {
      return this.posts;
    }
  }
}
