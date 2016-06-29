'use strict';

angular.module('zingDashboard', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.
    when('/login', {
      templateUrl: 'login.html',
      controller: 'LogInCtrl'
    }).
    when('/backstage', {
      templateUrl: 'backstage.html',
      controller: 'BackstageCtrl'
    }).
    otherwise({
      redirectTo: '/login'
    });
}])
.run(function($rootScope,$location,sessionService,$http){
	var routepermission = ['/login'];
	$rootScope.$on('$routeChangeStart',function(){
		if(routepermission.indexOf($location.path()) == -1)
		{
			var $checkSessionServer = $http.post('data/check_session.php');
			$checkSessionServer.then(function(msg){
				if(!msg.data)
				{
					$location.path('/login');
				}
			});
		}
	})
})
.factory('sessionService',function($http){
	return{
	    set:function(key,value){
	      return sessionStorage.setItem(key,value);
	    },
	    get:function(key){
	      return sessionStorage.getItem(key);
	    },
	    destroy:function(key){
	    	$http.post('data/destroy_session.php');
      		return sessionStorage.removeItem(key);
	    }
	  }
})
.controller('LogInCtrl', function($scope,$http,sessionService,$location) {
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
})
.controller('BackstageCtrl', function($scope,$http,$location,sessionService) {
	var $checkSessionServer = $http.post('data/check_session.php');
	$checkSessionServer.then(function(msg){
		if(!msg.data)
		{
			$location.path('/login');
		}
	});
	var staffLevel = sessionService.get('staffLevel').substring(0, 1);
	console.log(staffLevel);
});