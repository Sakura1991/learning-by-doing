(function(){
    var app = angular.module("app",['ngRoute','homeModule','classmanageModule','enterModule','commentModule','worksModule','resourcesModule','blogModule']);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl:'home/home.html',
            controller:'HomeCtrl'
        }).
        when('/classManagement',{
            templateUrl:'myclass/classManagement.html',
            controller:'ClassCtrl'
        }).
        when('/enter',{
            templateUrl:'enterclass/enter.html',
            controller:'EnterCtrl'
        }).
        when('/comment',{
            templateUrl:'comment.html',
            controller:'CommentCtrl'
        }).
        when('/works',{
            templateUrl:'works.html',
            controller:'WorksCtrl'
        }).
        when('/resources',{
            templateUrl:'resources/resources.html',
            controller:'ResourcesCtrl'
        }).
        when('/blog',{
            templateUrl:'blog/blog.html',
            controller:'BlogCtrl'
        }).
        otherwise({
            redirectTo:'/home'
        })
    }]);
    app.controller('liCtrl',['$scope','$location',function ($scope,$location) {

        $scope.location = $location;
        $scope.hide = function () {
            alert(1);
            $location.reload();
        }
        $scope.$watch('location.path()',function (now) {
            if (now.startsWith('/works')) {
                $scope.category = 'works';
            }else if (now.startsWith('/comment')) {
                $scope.category = 'comment';
            }else if (now.startsWith('/classManagement') || now.startsWith('/enter')) {
                $scope.category = 'enter';
            } else if(now.startsWith('/resources')){
                $scope.category = 'resources' ;
            }else if(now.startsWith('/blog')){
                $scope.category = 'blog' ;
            } else {
                $scope.category = 'home';
            }
        });
    }]);
})();
