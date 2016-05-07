// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var app = angular.module('starter', ['ionic']);
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//no blank
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
  $stateProvider
    .state('page1',{
      url: "/page1",
      templateUrl:'templates/page1.html'
    })
    .state('page2',{
      url:"/page2",
      templateUrl: 'templates/page2.html',
      controller: 'customersCtrl'
      
    })
    
    $urlRouterProvider.otherwise('/page1');
    //$ionicConfigProvider.views.swipeBackEnabled(false);
})
//no blank
//.controller('customersCtrl', function($scope, $http) {

 //   $http.get("http://localhost:1337/user")
	//    .success(function(data, status, headers, config) {
  //    console.log('success', status, data);
  //     $scope.names = data;
    
  //    console.log($scope.names[0]);
  //})   
  //.error(function(data, status, headers, config) {
  //    console.log('error', status, data);
  //  });
    
    
    
//})
;