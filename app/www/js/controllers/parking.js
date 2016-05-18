angular.module('starter.controllers', [])
.controller('parkingCtrl', function($scope,$http,$rootScope,$state, parkingFactory) {
    
    $scope.load = function(){
        console.log("cargo");
    }
    
    $scope.getParking = function(){
        var id = this.currentId;
        parkingFactory.getInfo(id).then(function(data){
            if(data && data[0])
            {
                console.log(data[0]);
                $scope.parkingObj = data[0];
            }
            else
            {
                console.log("Error al obtener parking");
            }
        });
    }
    $scope.load();
    
});