import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import esriConfig from "@arcgis/core/config";
import { key } from "../api-key.json";

esriConfig.apiKey = key;

/* Maps and scenes */
/* --------------- */
/* --------------- */
/* --------------- */

/* Display a map */
const map = new Map({
  basemap: "arcgis-topographic"
});


// const view = new MapView({
//   map,
//   center: [-118.805, 34.027], // longtitie, latitude
//   zoom: 13,
//   container: "viewDiv"
// });

/* Display a scene (3D) */
// const map = new Map({
//   basemap: "arcgis-topographic",
//   ground: "world-elevation"
// });

// const sceneView = new SceneView({
//   map,
//   container: "viewDiv",
//   camera: {
//     position: {
//       x: -118.808, // longtitude
//       y: 33.961, //latitude
//       z: 2000 //memters
//     },
//     tilt: 75
//   }
// });


/* Change the Basemap layer */
const view = new MapView({
  container: "viewDiv",
  map,
  center: [-118.80543, 34.02700],
  zoom: 13
});

const basemapToggle = new BasemapToggle({
  view,
  nextBasemap: "arcgis-imagery"
});

view.ui.add(basemapToggle, "bottom-right");

const basemapGallery = new BasemapGallery({
  view,
  source: {
    query: {
      title: '"World Basemaps for Developers" AND owner:esri',
    }
  }
});

view.ui.add(basemapGallery, "top-right");