(function(){
	angular.module("app.forecast")
	.controller("Forecast", function($scope, $routeParams, weatherSvc){
		
		$scope.forecast=null;
		$scope.getTime = getTime;
				
		if($routeParams.id !== undefined){
			getForecast($routeParams.id);
			}
			
			function getForecast(id){
				weather.getForecast(id)
					.then(
						function(response){
							console.log(response);
							$scope.forecast = response;
							},
						function(err){
							console.log("error loading current weather: "+err);
							}
						)}
			function getTime(dt){
					return new date(dt*1000);
				}
			
		});
})();