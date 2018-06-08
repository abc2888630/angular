define([
		'uiRouter',
		'ocLazyLoad',
		"hotkeys",
		"simditorModule",
		'simditor',
		'uploader',
		'./modules/controllers',
		'./configures/router'
	],
	function (uiRouter, ocLazyLoad, hotkeys, simditorModule, simditor, uploader, controllers, router) {
		'use strict'
		//注入框架的配置文件
		var dependency = [
			"oc.lazyLoad",//懒加载
			"ui.router",
			"appRouter",
			"myApp.controller"
		];
		var app = angular.module('myApp', dependency)
			.controller('mainController', function ($scope, $state) {
				$scope.hello = 'requireJS is ok';
				console.log($scope.hello);

				$scope.tabs = {
					items: [{
						id: 'GIS',
						text: 'GIS',
						address: 'GIS'
					}, {
						id: 'Data',
						text: 'Data',
						address: 'Data'
					}, {
						id: 'Editor',
						text: 'Editor',
						address: 'Editor'
					}],
					setActiveItem: function (item) {
						if (!item) return this.activeItemId = null;
						this.activeItemId = item.id;
						if (item.address) {
							$state.go(item.address, item.params);
						}
					},
					onItemClick: function (item) {
						this.setActiveItem(item);
						console.log(item);
					}
				}
			})
			.directive("editTool", ["$rootScope", function ($rootScope, simditor, simditorModule, hotkeyss, uploader) {
				return {
					restrict: 'E', //attribute or element
					templateUrl: "./site/demo.html",
					// template:"<div>123</div>",
					replace: true,
					link: function (scope, element, attrs) {
						//console.log("tool ok");
						toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
						var editor = new Simditor({
							textarea: $('#editor'),
							placeholder: '这里输入文字...',
							defaultImage: './img/noImage.png',
							toolbar: toolbar,
							toolbarFloat: true,
							allowedAttributes: [],
							upload: location.search === '?upload' ? {
								url: '/upload'
							} : false
						});
						//editor.setValue("hello world");
						editor.on("blur", function (e) {
							editor.getValue();
						})
						// editor.blur(function () {
						// 	editor.getValue();

						// })
					}
				}
			}])

		return app;
	})