define([
	'../controllers/dataCtrl',
	'../controllers/mapCtrl',
	'../controllers/listCtrl',
],function(dataCtrl, mapCtrl, listCtrl){
	'use strict'
	var module = angular.module('myApp.controller', []);
	module.controller('dataCtrl', dataCtrl);
	module.controller('mapCtrl', mapCtrl);
	module.controller('listCtrl', listCtrl);

	return module;
});