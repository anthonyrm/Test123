angular.module('starter.factories', [])
.factory('parkingFactory', function($http, $q) {

  return {
		getInfo: function(id){
            var defered = $q.defer();
            var promise = defered.promise;
			 $http.get("http://192.168.1.37:1337/parking/getInfo?id=" + id)
                .success(function(data){
                    defered.resolve(data);
                })
                .error(function(err){
                    defered.reject(err)
                });
             return promise;
        }
  }

});
