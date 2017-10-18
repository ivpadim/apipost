angular.module('postListApp')
  .directive('posts', function(){
    return{
      templateUrl: 'templates/posts.html',
      controller: 'mainCtrl',
      replace: true
    }
  })
