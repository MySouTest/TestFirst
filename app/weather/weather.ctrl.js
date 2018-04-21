(function(){
	angular.module("app.weather")
	.controller("Weather", function($scope, $routeParams, weatherSvc){
	
		$scope.current=null;
		$scope.getTime = getTime;
		
		if($routeParams.id !== undefined){
			getCurrent($routeParams.id);
			}
			
			function getCurrent(id){
				weather.getCurrent(id)
					.then(
						function(response){
							console.log(response);
							$scope.current = response;
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