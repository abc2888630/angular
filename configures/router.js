define(["app"], function (app) {
	"use strict"            

	var app = angular.module('appRouter', ['ui.router', 'oc.lazyLoad']);
	var path = "angular/"
	app.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams
			}
		])
		.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
			//用于改变state时跳至顶部
			$uiViewScrollProvider.useAnchorScroll();
			// 默认进入先重定向
			$urlRouterProvider.when('', 'GIS');
			$stateProvider
				.state('GIS', {
					url: '/GIS',
					templateUrl: path + '../views/map.html',
					controller: 'mapCtrl'
				})
				.state('Data', {
					url: '/Data',
					templateUrl: path + '../views/data.html',
					controller: 'dataCtrl'
				})
				.state('Editor', {
					url: '/Editor',
					templateUrl: path + '../views/list.html',
					controller: 'listCtrl'
				})
		})
		// .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$uiViewScrollProvider',
		// 	function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $uiViewScrollProvider) {
		// 		//用于改变state时跳至顶部
		// 		$uiViewScrollProvider.useAnchorScroll();
		// 		// 默认进入先重定向
		// 		$urlRouterProvider.when('', 'GIS');

		// 		$ocLazyLoadProvider.config({
		// 			modules: [
		// 				{
		// 				name: 'mapCtrl',
		// 				files: ['/controllers/mapCtrl.js']
		// 				}, 
		// 				{
		// 					name: 'dataCtrl',
		// 					files: ['/controllers/dataCtrl.js']
		// 				}, 
		// 				{
		// 					name: 'listCtrl',
		// 					files: ['/controllers/listCtrl.js']
		// 				}
		// 			]
		// 		});
		// 		$stateProvider
		// 			.state('GIS', {
		// 				url: '/GIS',
		// 				views: {
		// 					'body': {
		// 						templateUrl: path + '../views/map.html',
		// 					},
		// 				},
		// 				resolve: {
		// 					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
		// 						return $ocLazyLoad.load(
		// 							[
		// 								path + '../controllers/mapCtrl.js',
		// 							]);
		// 					}]
		// 				}
		// 			})
		// 			.state('Data', {
		// 				url: '/Data',
		// 				views: {
		// 					'body': {
		// 						templateUrl: path + '../views/data.html',
		// 					},
		// 				},
		// 				resolve: {
		// 					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
		// 						return $ocLazyLoad.load(
		// 							[
		// 								path + '../controllers/dataCtrl.js',
		// 							]);
		// 					}]
		// 				}
		// 			})
		// 			.state('Editor', {
		// 				url: '/Editor',
		// 				views: {
		// 					'body': {
		// 						templateUrl: path + '../views/list.html',
		// 					},
		// 				},
		// 				resolve: {
		// 					loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
		// 						return $ocLazyLoad.load(
		// 							[
		// 								path + '../controllers/listCtrl.js',
		// 							]);
		// 					}]
		// 				}
		// 			})

		// 	}
		// ]); 
})