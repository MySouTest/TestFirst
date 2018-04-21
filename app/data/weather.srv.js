(function(){
	angular.module("app.data")
		.factory("weatherSvc", function($http, $q){
			return {
				find: findByLocation,
				getCurrent: getCurrentWeather,
				getForecast: getForecast
				}
				
				
			function findByLocation(location) {
				var url="http://api.openweathermap.org/data/2.5/find?q=" + location;
				
				var defer = $q.defer();
				
				$http.get(url, {headers: {'x-api-key': 'cedfc782d6636e5116fa89e8e36144ec'}})
					.success(function(response){
						defer.resolve(response);
						})
					.error(function(err){
						defer.reject(err);
						})
					return defer.promise;
				}
			
			function getCurrentWeather(id) {
				var url="http://api.openweathermap.org/data/2.5/weather?q=" + id;
				
				var defer = $q.defer();
				
				$http.get(url, {headers: {'x-api-key': 'cedfc782d6636e5116fa89e8e36144ec'}})
					.success(function(response){
						defer.resolve(response);
						})
					.error(function(err){
						defer.reject(err);
						})
					return defer.promise;
				}
				
			function getForecast(id) {
				var url="http://api.openweathermap.org/data/2.5/forecast/daily?id=" + id;
				
				var defer = $q.defer();
				
				$http.get(url, {headers: {'x-api-key': 'cedfc782d6636e5116fa89e8e36144ec'}})
					.success(function(response){
						defer.resolve(response);
						})
					.error(function(err){
						defer.reject(err);
						})
					return defer.promise;
				}
		
			});
		
})();