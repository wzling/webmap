// import { fromLonLat } from 'ol/proj';
// import {VectorLayer} from 'ol/layer';
// import {GeoJSON} from 'ol/format';
// import VectorSource from 'ol/source/Vector';
// import {Select} from 'ol/interaction';
// import {Fill, Stroke, Style} from 'ol/style';
// import {Fill, Style} from 'ol/style';
// import {altKeyOnly, click, pointerMove} from 'ol/events/condition';

//------------ hover ------------//
// const selected = new Style({
//   fill: new Fill({
//     color: '#eeeeee',
//   }),
//   stroke: new Stroke({
//     color: 'rgba(255, 255, 255, 0.7)',
//     width: 2,
//   }),
// });

//------------ TNcounty ------------//
// const style = new Style({
//   fill: new Fill({
//     color: '#eeeeee',
//   }),
// });
// var TNcounty = new VectorLayer({
//   source: new VectorSource({
//     url: 'https://sheethub.com/ronnywang/鄉鎮市區行政區域界線/uri/19260642?format=geojson',
//     format: new GeoJSON(),
//   }),
//   background: 'white',
//   style: function (feature) {
//     const color = feature.get('COLOR') || '#eeeeee';
//     style.getFill().setColor(color);
//     return style;
//   },
// });
// map.addLayer(TNcounty)
