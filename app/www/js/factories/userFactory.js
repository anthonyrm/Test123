angular.module('starter.factories', [])
.factory('userFactory', function($http, $q) {

 var users = [];

  return {
		getUsers: function(){
            var defered = $q.defer();
            var promise = defered.promise;
			 $http.get("http://192.168.1.37:1337/user")
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
