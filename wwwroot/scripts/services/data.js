'use strict';

angular.module('postListApp')
.service('dataService', function($http){

  this.getPosts = function(callback){
    $http.get('api/posts').then(callback);
  };

  // this.deletepost = function(post){
  //   console.log("The " + post.name + " post has been deleted!");
  // };

  // this.saveposts = function(posts){
  //   console.log(posts.length + " posts has been saved!");
  // };
});
