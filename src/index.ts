import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js"
import esriConfig from "@arcgis/core/config";
import { key } from "../api-key.json";

esriConfig.apiKey = key;

const map = new Map({
  basemap: "arcgis-topographic"
});


const view = new MapView({
  map,
  center: [-118.805, 34.027],
  zoom: 13,
  container: "viewDiv"
});