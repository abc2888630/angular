define([
	'../js/ol'
	], function(ol){
		'use strict'

		var ctrl = ['$scope',function($scope){
			$scope.label = "map";

			var map = new ol.Map({
				layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
				],
				target: 'map',
				view: new ol.View({
					center: [0, 0],
					zoom: 2
				})
			});
		}];

		return ctrl;
	});