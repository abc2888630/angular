define(["app"],function(app){
	"use strict"	            
	
	var app = angular.module('appRouter', ['ui.router']);
	var path ="angular/"
	app.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams
			}
		])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider){
			//用于改变state时跳至顶部
			$uiViewScrollProvider.useAnchorScroll();
			// 默认进入先重定向
			$urlRouterProvider.when('','GIS');
			$stateProvider
			.state('GIS',{
				url:'/GIS',
				templateUrl: path+'../views/map.html',
				controller: 'mapCtrl'
			})
			.state('Data',{
				url:'/Data',
				templateUrl: path+'../views/data.html',
				controller: 'mapCtrl'
			})
			.state('List',{
				url:'/List',
				templateUrl: path+'../views/list.html',
				controller: 'mapCtrl'
			})
		})
	 
})