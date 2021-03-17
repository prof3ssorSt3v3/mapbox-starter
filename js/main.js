/*
SAMPLE URL
https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1Ijoic3RldmVncmlmZml0aCIsImEiOiJja2pnamd1dHoyaDdvMnNuMG5mMmlieXdvIn0.KbiXqVd8ymvPhxBY-FzTTw
base/style/static/lon,lat,zoom,bearing,pitch,size?access_token=token

Reference for MapBox static map images
https://docs.mapbox.com/api/maps/static-images/

Available styles
// streets-v11, outdoors-v11, light-v10, dark-v10, satellite-v9
*/

import GEO from './geo.js';

const APP = {
  baseURL: 'https://api.mapbox.com/styles/v1/mapbox',
  style: 'streets-v11', //matches HTML
  lon: -122.4241,
  lat: 37.78,
  zoom: 10, //matches HTML
  bearing: 0,
  pitch: 60, //matches HTML
  size: '1000x600',
  //TODO:
  token: 'replace this token with one of your own',
  init() {
    APP.addListeners();
    //initial load with default image
    APP.loadMap();
  },
  addListeners() {
    //zoom listener
    document.getElementById('zoom').addEventListener('change', APP.setZoom);
    //style listener
    document.getElementById('style').addEventListener('change', APP.setStyle);
    //pitch listener
    document.getElementById('pitch').addEventListener('change', APP.setPitch);

    // get current location for map
    APP.getPosition();

    //image load and error listener
    let img = document.getElementById('map');
    img.addEventListener('load', (ev) => {
      img.alt = `Map image for ${APP.lat}, ${APP.lon}`;
    });
    img.addEventListener('error', (err) => {
      console.warn(err);
      img.alt = `Failed to load map image. ${err.message}`;
    });
  },
  setZoom(ev) {
    let select = ev.target;
  },
  setStyle(ev) {
    let select = ev.target;
  },
  setPitch(ev) {
    let select = ev.target;
  },
  getPosition() {
    //TODO:
    //use the imported GEO object to fetch the current position and
    //use APP.loadMap and APP.fail as the callbacks
  },
  loadMap(pos) {
    if (pos) {
      console.log(pos);
      //save the longitude and latitude if provided
      APP.lon = pos.coords.longitude;
      APP.lat = pos.coords.latitude;
    } else {
      //use a default location
      let pos = {
        coords: {
          latitude: APP.lat,
          longitude: APP.lon,
        },
      };
    }
    //TODO: build the correct URL to load the image
    let url = `${APP.baseURL}/`;
    let img = document.getElementById('map');
    img.alt = 'loading new map image';
    img.src = url;
  },
  fail(err) {
    console.warn(err);
    //TODO:
    //show a modal with details about the error
    //have it remove itself
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
