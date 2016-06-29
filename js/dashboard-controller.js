'use strict';

var zingDashboardControllers = angular.module('zingDashboardControllers', []);

zingDashboardControllers.controller('LoginCtrl',function($scope,$http,sessionService,$location) {
	sessionService.destroy('staffLevel');
	$scope.login = function(user){
		var $promise = $http.post('data/user.php',user);
		$promise.then(function(msg){
			if(msg.data == 'fail')
			{
				$scope.message = "error name or passwored";
			}
			else
			{
				sessionService.set('staffLevel',msg.data);
				$location.path('/backstage')
			}
		});
	}
});

zingDashboardControllers.controller('BackstageCtrl', function($scope,$http,$location,sessionService) {
	// var $checkSessionServer = $http.post('data/check_session.php');
	// $checkSessionServer.then(function(msg){
	// 	if(!msg.data)
	// 	{
	// 		$location.path('/login');
	// 	}
	// });
	var staffLevel = sessionService.get('staffLevel').substring(0, 1);
	console.log(staffLevel);
});