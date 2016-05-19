angular.module('starter.factories')
.factory('userFactory', ['$http', '$q', 'ApiEndpoint', function($http, $q, ApiEndpoint) {

 var users = [];

  return {
		getUsers: function(){
            var defered = $q.defer();
            var promise = defered.promise;
			 $http.get(ApiEndpoint.url + "/user")
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
