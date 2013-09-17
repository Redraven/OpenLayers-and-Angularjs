
var MapFunctions = MapFunctions || {};

MapFunctions.initMap = function() {
	 var backgroundmap = new OpenLayers.Layer.WMS("OpenLayers WMS",
				"http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'});
	 var featurelayer = new OpenLayers.Layer.Vector("Features Layer");

	 // controllers / map tools
	 var navTool = new OpenLayers.Control.Navigation();
	 var addFeatureTool = new OpenLayers.Control.DrawFeature(featurelayer, OpenLayers.Handler.Point, {
				displayClass: 'olControlDrawFeaturePoint',
				handlerOptions: {citeCompliant: false},
				eventListeners: {
					 'featureadded' : function(eventObject) {
						  console.dir(eventObject);
						  var feature = eventObject.feature;
						  // We will add som inital attributes to new features
						  feature.attributes.name = "[no name]";
						  feature.attributes.color = "red";
					 }
				}
		  }); 
	 var toolbar = new OpenLayers.Control.Panel(
		  {
				defaultControl: navTool,
				displayClass: "olControlEditingToolbar"
		  });
	 toolbar.addControls([navTool,addFeatureTool]);

	 // Now create the map
	 var map = new OpenLayers.Map('map');
	 map.addLayers([backgroundmap, featurelayer]);
	 map.addControls([toolbar]);
	 
	 // Now show the map
	 map.zoomToMaxExtent();
	 return map;
};


