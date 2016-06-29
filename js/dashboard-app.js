'use strict';

var app = angular.module('zingDashboard', ['ui.router','zingDashboardControllers']);

app.run(function($rootScope,$location,sessionService,$http,$state){
	// var routepermission = ['/login'];
	// $rootScope.$on('$stateChangeStart',function(){
	// 	if(routepermission.indexOf($location.path()) == -1)
	// 	{
	// 		var $checkSessionServer = $http.post('data/check_session.php');
	// 		$checkSessionServer.then(function(msg){
	// 			if(!msg.data)
	// 			{
	// 				$location.path('/login');
	// 			}
	// 		});
	// 	}
	// })
	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams,$state){ 
	    if (toState.url != "/login") {
	    	var $checkSessionServer = $http.post('data/check_session.php');
			$checkSessionServer.then(function(msg){
				if(!msg.data)
				{
	    			 event.preventDefault(); 
	    			 $state.to("login");
				}
			});
	    };
	})
});

app.factory('sessionService',function($http){
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
});

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('login',{
			url:'/login',
			templateUrl:'dashboardTpl/login.html',
			controller:'LoginCtrl'
		})
		.state('backstage',{
			url:'/backstage',
			templateUrl:'dashboardTpl/backstage.html',
			controller:'BackstageCtrl'
		});
	$urlRouterProvider.otherwise('/login');
});