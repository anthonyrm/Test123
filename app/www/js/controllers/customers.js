angular.module('starter.controllers')
.controller('customersCtrl', function($scope,$http,$rootScope,$state,userFactory) {
    
    $scope.load = function(){

     //   $http.get("http://192.168.1.40:1337/user")
     //       .success(function(data, status, headers, config) {
     //       console.log('success', status, data);
     //       $scope.names = data;
     //       console.log($scope.names[0]);
     //   }).error(function(data, status, headers, config) {
     //       console.log('error example..', status, data);
     //   });
        
        userFactory.getUsers()
            .then(function(data){
             console.log(data);
             $scope.names = data; 
        })
        .catch(function(err){
            //error
        });
   
    }
    
    $scope.load();
});