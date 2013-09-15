
var FeatureEditor = FeatureEditor || {};

FeatureEditor.initMap = function() {
	 var backgroundmap = new OpenLayers.Layer.WMS("OpenLayers WMS",
				"http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'});
	 var featurelayer = new OpenLayers.Layer.Vector("Features Layer");

	 // controllers / map tools
	 var navTool = new OpenLayers.Control.Navigation();
	 var addFeatureTool = new OpenLayers.Control.DrawFeature(featurelayer, OpenLayers.Handler.Point, {
				displayClass: 'olControlDrawFeaturePoint',
				handlerOptions: {citeCompliant: false}
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

};

/**
 * OnloadEvent, starts the map
 * @type @exp;FeatureEditor@pro;initMap
 */
window.onload = FeatureEditor.initMap;
