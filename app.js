define([
		'uiRouter',
		'./modules/controllers',
		'./configures/router'
],function (uiRouter, controllers, router) {
	'use strict'

    var app = angular.module('myApp', ['ui.router','appRouter', 'myApp.controller']);

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