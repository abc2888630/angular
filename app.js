define([
		'uiRouter',
		'./modules/controllers',
		'./configures/router'
],function (uiRouter, controllers, router) {
	'use strict'
	//注入框架的配置文件
    var dependency = [
		"ui.router",
		"appRouter",
		"myApp.controller"
    ];
    var app = angular.module('myApp', dependency);

    app.controller('mainController', function ($scope,$state) {
        $scope.hello  = 'requireJS is ok';
        console.log($scope.hello);

        $scope.tabs ={
        	items:[
	        	{
	        		id:'GIS',
	        		text:'GIS',
	        		address:'GIS'
	        	},{
	        		id:'Data',
	        		text:'Data',
	        		address:'Data'
	        	},{
	        		id:'List',
	        		text:'List',
	        		address:'List'
	        	}
	        ],
	        setActiveItem:function(item){
	        	if(!item)return this.activeItemId = null;
	        	this.activeItemId = item.id;
	        	if(item.address){
	        		$state.go(item.address, item.params);
	        	}
	        },
	        onItemClick:function(item){
	        	this.setActiveItem(item);
	        	console.log(item);
	        }
        }
    });

    return app;

})
