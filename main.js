import Map from 'ol/Map';
import {MousePosition, ScaleLine} from 'ol/control';
import {TileWMS,OSM} from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {createStringXY} from 'ol/coordinate';
import LayerSwitcher from 'ol-layerswitcher';

//------------ mapView ------------//
const mapView = new Map({
  target: 'map',
  view: new View({
    projection: 'EPSG:4326', 
    center: ([120.2187006359306, 22.997521330092304]), // NCKU ES
    zoom: 12, // S_TainanCity
  }),
});
//------------ osm_basemap ------------//
var osm_basemap = new TileLayer({
    source: new OSM(), 
  });
  mapView.addLayer(osm_basemap);

//------------ tainan_shelters ------------//
var tainan_shelters = new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/tainan/wms',
      params: {'LAYERS': 'tainan:tainan_shelters','TILED': true},
    }),
  });
mapView.addLayer(tainan_shelters);

//------------ layerSwitcher ------------//
const layerSwitcher = new LayerSwitcher({
  activationMode: 'click',
  startActive: false,
  groupSelectStyle: 'children'
});
mapView.addControl(layerSwitcher);

// ------------ mousePositionControl ------------//
var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  className: 'mousePosition',
  projection: 'EPSG:4326',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  //className: 'custom-mouse-position',
  //target: document.getElementById('mouse-position'),
});
const projectionSelect = document.getElementById('projection');
projectionSelect.addEventListener('change', function (event) {
  mousePositionControl.setProjection(event.target.value);
});
const precisionInput = document.getElementById('precision');
precisionInput.addEventListener('change', function (event) {
  const format = createStringXY(event.target.valueAsNumber);
  mousePositionControl.setCoordinateFormat(format);
});
mapView.addControl(mousePositionControl);

// ------------ scaleLineControl ------------//
var scaleLineControl = new ScaleLine({
  bar: true,
  minWidth: 100,
})
mapView.addControl(scaleLineControl);