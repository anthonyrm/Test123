angular.module('starter.controllers', [])
.controller('customersCtrl', function($scope,$http,$rootScope,$state) {
    
    $scope.load = function(){
        $http.get("http://localhost:1337/user")
            .success(function(data, status, headers, config) {
            console.log('success', status, data);
            $scope.names = data;
            console.log($scope.names[0]);
        }).error(function(data, status, headers, config) {
            console.log('error', status, data);
        });
    }
    
    $scope.load();
});