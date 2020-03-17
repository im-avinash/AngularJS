var app=angular.module('myApp',['ngRoute','ngAnimate']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/home',{
            templateUrl:'views/home.html',
            controller:'appController'
        })
        .when('/dir',{
            templateUrl:'views/dir.html',
            controller:'appController'
        })
        .when('/contact',{
            templateUrl:'views/contact.html',
            controller:'appController'
        })
        .otherwise({
            redirectTo:'/home'
        });
}]);
app.directive('imAvi',[function(){
    return {
        restrict: 'E',
        scope:{
            val:'=',
        },
        transclude:true,
        replace:true,
        templateUrl:'views/random.html',
        controller: function($scope){
            $scope.random=Math.floor(Math.random()*4);
        }
    }
}]);
app.controller('appController',["$scope","$http",function($scope,$http){
    $scope.message="hey you all";
    $scope.removeFun=function(x){
        var remele=$scope.arrobj.indexOf(x);
        $scope.arrobj.splice(remele,1);
    }
    $scope.addObj=function(){
        $scope.arrobj.push({
            name:$scope.add.name,
            std:$scope.add.std,
            div:$scope.add.div,
            available:$scope.add.available
        });
        $scope.add.name="";
        $scope.add.std="";
        $scope.add.div="";
        $scope.add.available="";
    }
    
    $http.get('data/appobj.json').success(function(data){
        $scope.arrobj=data;
    })
}]);