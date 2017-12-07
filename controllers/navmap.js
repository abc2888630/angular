define([],function(){
	"use strict";

	let ctrl = ["$scope",function($scope){

		let pureCoverage = false;

		$scope.init = function(){
			let wmsSource = new ol.source.TileWMS({
				url:"https://ahocevar.com/geoserver/wms",
				params:{
					'LAYERS':'topp:states',
					'TILED':true
				},
				serverTpye:'geoserver',
				crossOrigin:'anonymous'
			});

			let  wmsLayer = new ol.layer.Tile({
				source:wmsSource,
				name:"wmsLayer"
			})

			let view = new ol.View({
				center:[0,0],
				zoom:2
			})

			let map = new ol.Map({
				layer:[
					new ol.layer.Tile({
						source:new ol.source.OSM()
					}),
					wmsLayer
				],
				target:'map',
				view:view
			})；

			map.on('singleclick',function(e){
				document.getElementById("info").innerHTML = '';
				var viewResolution = 
			})
		}
	}]
})