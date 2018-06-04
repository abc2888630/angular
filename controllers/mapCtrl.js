define([
	'../js/ol'
	], function(ol){
		'use strict'

		var ctrl = ['$scope','$http', function($scope, $http){
			
			//var wkt = 'POLYGON((109.2548 24.3658, 109.27 24.27, 109.3132 24.3499, 109.2703 24.3688))';
			var gismap ={
				loadMap: function(){

					var map = new ol.Map({
						//layers: [vector],
						target: 'map',
						view: new ol.View({
							center: this.createCenter(),
							zoom: 10
						}),
						interactions:new ol.interaction.defaults({
							mouseWheelZoom:true,
							doubleClickZoom:false,
							dragPan:false
						}),
						controls:new ol.control.defaults({
							attribution:false,
							zoom:true

						}) 
					});

					var layer = this.createLayer();
					// console.log(layer);
					map.addLayer(layer);

					return map;
				},
				createCenter: function(){
					var center = ol.proj.transform([109.513610, 24.4287910],'EPSG:4326', 'EPSG:3857');
					return center;
				},
				createSource: function(){
					var source = new ol.source.OSM();
					return source;
				},
				createView: function(){

				},
				createLayer: function(){
					var layer = new ol.layer.Tile({
						source: this.createSource()
					})

					// $.ajax({
					// 	data:{},
					// 	url:'../json/mapData.json',
					// 	//type/method:'',
					// 	dataType:'',
					// 	success:function(){
					// 		$scope.$apply();
					// 	}
					// });
					// $http({
					// 	method:'GET',
					// 	url:'./json/mapJson.json',
					// 	headers:{'Content-Type':'application/x-wwww-form-urlencoded; charset=UTF-8'}
					// }).success(function(res){
					// 	console.log("ok");
					// }).error(function(){
					// 	console.log("error");
					// });
					$http.get('../json/mapJson.json').then(function(res){
						console.log("ok");
					},function(){
						console.log("error");
					});

					//layer.addFeature();
					return layer;
				},
				addLayer: function(layer){
					this.map.addLayer(layer);
				},
				removeLayer: function(){

				},
				fitMap: function(){

				},
			};

			var wkt1 = 'POLYGON((109.513610876008 24.4287910815577, 109.516357458039 24.4348863830032, 109.508632696076 24.4380120643412, 109.498333013459 24.4356678106014, 109.495243108674 24.4408251112965, 109.486145055695 24.4461384731751, 109.48133853714 24.436136664836, 109.47910693924 24.4331672252422, 109.470180547638 24.4333235132798, 109.451641118928 24.432542071155, 109.43293002884 24.4314480440458, 109.411815679474 24.4289473750181, 109.406837499543 24.439574875954, 109.418682134553 24.4473886434199, 109.384693181916 24.4570770423088, 109.385379827424 24.4820759191863, 109.388813054963 24.4920740797668, 109.412159002228 24.4908243531519, 109.41147235672 24.5001970000564, 109.375766790314 24.4976976958556, 109.369586980744 24.5114432540683, 109.348300970002 24.5039458631992, 109.355854070588 24.4933237939638, 109.336627996369 24.4926989384176, 109.329761541291 24.4970728620427, 109.333881414338 24.507069830415, 109.340404546662 24.5068615345297, 109.337657964631 24.5102978144797, 109.312938726349 24.5179996139786, 109.314312017365 24.5055043659933, 109.314312017365 24.4973817885924, 109.304012334748 24.4942575806304, 109.297832525177 24.4880089318629, 109.314312017365 24.4830097893516, 109.317745244904 24.4736358617924, 109.317745244904 24.464886232878, 109.327358282013 24.4398839436127, 109.317058599396 24.4398839436127, 109.322895086213 24.4274660526096, 109.32358173172 24.4115229351231, 109.320491826935 24.4004240861396, 109.310878789826 24.3894806041046, 109.30950549881 24.3816632509321, 109.311565435334 24.3736890526526, 109.317058599396 24.3707963270221, 109.332679784699 24.3696235815667, 109.341863668366 24.3684508252379, 109.357313192292 24.3616486241255, 109.37714008133 24.3537513572418, 109.396194494172 24.345853597618, 109.400400197907 24.343038435491, 109.401286645128 24.3356529956378, 109.421052737428 24.3354183822898, 109.419368310167 24.3380703257248, 109.420748064536 24.3408152884419, 109.421204501116 24.3541228787467, 109.422320300067 24.3628410947497, 109.42073243233 24.3770704348195, 109.421934061968 24.3839499810849, 109.435237818682 24.3931351551593, 109.447211199725 24.3938777570832, 109.465063982928 24.3926661411691, 109.471974904403 24.3940323354659, 109.477897221907 24.3989373009582, 109.482660825118 24.4077409316336, 109.485664899215 24.4181552973318, 109.493775899276 24.4270840035415, 109.502441939539 24.4292788973079, 109.513610876008 24.4287910815577))';
			var wkt2 = 'POLYGON((109.313243172892 24.3699543004036, 109.294875405557 24.365888709272, 109.270327828653 24.3688597310301, 109.23616721464 24.3701106666837, 109.223979256876 24.3718306830064, 109.215396188028 24.372925226669, 109.213336251505 24.3712052252318, 109.208186410196 24.3660450805778, 109.208615563639 24.3564278857218, 109.205268166788 24.3486866858346, 109.214895734633 24.3014321627245, 109.219358930433 24.2723289454297,109.21729899391 24.260435891023, 109.22519541725 24.2413407745543, 109.248884687269 24.2529230959385, 109.269827375258 24.2670082814992, 109.301069745863 24.2519840280874, 109.317549238051 24.255427242974, 109.325102338637 24.245410358992, 109.353254804457 24.2447842775511, 109.381415232769 24.2457125083437, 109.383775576702 24.2505253950976,109.386565074077 24.2508775503931, 109.390126482582 24.2525341432131, 109.392443911171 24.2554686945298, 109.396950022316 24.2576597820196, 109.39840914402 24.2618462191896, 109.399009958839 24.2709228804368, 109.399439112282 24.2787861877958, 109.400211588478 24.2862187173809, 109.400511995888 24.2884483914298, 109.403945223427 24.2931814293608, 109.403440968132 24.2947509205393, 109.405930058098 24.29668821992498, 109.407110230064 24.2975231519343, 109.407604915675 24.2993457837663, 109.40780876356 24.3000693793628, 109.409341343663 24.3023364247734, 109.410342944991 24.3052613782471, 109.409892333876 24.3065911644359, 109.406931175124 24.3068356089097, 109.403948558699 24.3078524928656, 109.401234163176 24.3103457796054, 109.398529228719 24.3184329790839, 109.398829636129 24.3225000940265, 109.399473366293 24.3297644463495, 109.399816689047 24.3368029718927, 109.398751800035 24.3410555429342, 109.390683715318 24.3452001303171, 109.382529799913 24.3507521008373, 109.367595260118 24.355834677271, 109.357638900255 24.3598224020462, 109.344592635606 24.3646700550832, 109.330344741319 24.3679538435484, 109.313243172892 24.3699543004036))';

			var format = new ol.format.WKT();

			var raster = new ol.layer.Tile({
				source: new ol.source.OSM()
			});
			// var feature = format.readFeature(wkt, {
			// 	dataProjection: 'EPSG:4326',
			// 	featureProjection: 'EPSG:3857'
			// });
			var feature1 = format.readFeature(wkt1, {
				dataProjection: 'EPSG:4326',
				featureProjection: 'EPSG:3857'
			});
			var feature2 = format.readFeature(wkt2, {
				dataProjection: 'EPSG:4326',
				featureProjection: 'EPSG:3857'
			});
			var center = ol.proj.transform([109.513610, 24.4287910],'EPSG:4326', 'EPSG:3857')
			var vector = new ol.layer.Vector({
				source: new ol.source.Vector({
					features: [feature1, feature2]
				}),
				// style: function(feature){
				// 	var style = new ol.style.Style({
				// 		fill: new ol.style.Fill({
				// 			color: 'rgba(255, 0, 0, 0.1)'
				// 		}),
				// 		stroke: new ol.style.Stroke({
				// 			color: 'red', 
				// 			width: 1
				// 		})
				// 	})
				// 	return style;
				// }
			});
			var GoogleMapSource = new ol.source.XYZ({
				//url:"http://mt0.google.cn/vt/lyrs=m@1&hl=en-US&gl=cn&x={x}&y={y}&z={z}&s=Galil"
				url:"http://mt0.google.cn/vt/lyrs=m@1&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil",
			});
			var GoogleMap = new ol.layer.Tile({
				source:GoogleMapSource,
				opacity:0.7
			});
			var map = new ol.Map({
				layers: [vector, GoogleMap],
				target: 'map',
				view: new ol.View({
					center: center,
					zoom: 10
				}),
				interactions:new ol.interaction.defaults({
					mouseWheelZoom:true,
					doubleClickZoom:false,
					dragPan:true
				}),
				controls:new ol.control.defaults({
					attribution:false,
					zoom:false

				}) 
			});
			map.getView().fit(vector.getSource().getExtent(), map.getSize(),{constrainResolution:false});
			map.on("click", function(evt){
					console.log(evt);
					var features = evt.map.getLayers().getArray()[0].getSource().getFeatures()
					console.log(features);
					$http.get('../json/mapJson.json').then(function(res){
						console.log("ok");
					}).catch(function(res){
						//console.log(res);
						console.log("error");
					});;
				})
			// $scope.init = function(){
			// 	gismap.map = gismap.loadMap();

			// 	gismap.map.on("click", function(evt){
			// 		console.log(evt);
			// 		evt.map.getLayers().getArray()[0].getSource().getFeatures()
			// 	});
			// }
		}];

		return ctrl;
	});