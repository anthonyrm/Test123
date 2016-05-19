angular.module('starter.factories')
.factory('parkingFactory', ['$http', '$q', 'ApiEndpoint',function($http, $q, ApiEndpoint) {
  return {
		getInfo: function(id){
            var defered = $q.defer();
            var promise = defered.promise;
			 $http.get(ApiEndpoint.url + "/parking/getInfo?id=" + id)
                .success(function(data){
                    defered.resolve(data);
                })
                .error(function(err){
                    defered.reject(err)
                });
             return promise;
        }
  }

}]);
