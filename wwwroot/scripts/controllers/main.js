'use strict';

angular.module('postListApp')
.controller('mainCtrl', function($scope, dataService){

  // $scope.addpost = function(){
  //   var post = {name: "This is a new post."};
  //   $scope.posts.unshift(post);
  // };

  dataService.getPosts(function(response){
    console.log(response.data);
    $scope.posts = response.data;
  });

  // $scope.deletepost = function(post, index){
  //   dataService.deletepost(post);
  //   $scope.posts.splice(index, 1);
  // };

  // $scope.saveposts = function(){
  //   var toSave = $scope.posts.filter(function(post){
  //     if(post.edited)
  //       return post;
  //   });
  //   dataService.saveposts(toSave);
  // };
});
