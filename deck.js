// This script cotrols the map interphase of the dashboard
// it uses Deck.gl
// Step 1: Declare the constants, DeckGL, PathLayer for routes, PolygonLayer for Bathymetry and Jetties
//Step 1b: Declare the layers variables
// Step 2: Get the data and convert to DeckGl format
// Step 3: Create an instance of the Map
// Step 4: Add Layers to the created Instance

import { createBathymetryLayer, createRouteLayer, createJettyLayer, createLandingLayer } from "./deckLayers.js";

// Step 1
const { DeckGL } = deck;

const LINE_COLOR = [0, 255, 0]; // Green color for the lines

//Fectch the geojson file
//fetch('data/depth.geojson').then(response => response.json()).then(data => {console.log(data)})

// Step 2
function convertGeoJSONToPaths(geojsonData) {
    const polygons = [];

    geojsonData.features.forEach((feature) => {
        const contour = feature.geometry.coordinates[0][0];
        const depth = feature.properties.DN || 0.0; // Adjust as needed
        const id = feature.properties.fid_1;
        const band = feature.properties.band_0;
        const color = [255, 0, 128]; // You can customize the color here

        polygons.push({ contour, depth, id, band, color });
    });

    return polygons;
}

// Fetch and convert bathymetry data
async function fetchAndConvertBathyData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return convertGeoJSONToPaths(data);
    } catch (error) {
        console.error('Error fetching bathymetry data:', error);
        return [];
    }
}

// Fetch and convert jetties data
async function fetchAndConvertJettyData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return convertJettyGeojsonToPolygon(data);
    } catch (error) {
        console.error('Error fetching bathymetry data:', error);
        return [];
    }
}



function convertRouteToPaths(routegeojson) {
    const routePaths = [];
    routegeojson.features.forEach((feature) => {
        const path = feature.geometry.coordinates[0];
        const name = feature.properties.Name;
        const route_code = feature.properties.Route_ID;
        const avg_depth = feature.properties["Avg Depth"];

        routePaths.push({ path, name, route_code, avg_depth });
    });
    return routePaths;
}

function convertJettyGeojsonToPolygon(jettygeojson) {
    const jettyPoints = [];
    jettygeojson.features.forEach((features) => {
        const position = features.geometry.coordinates[0];
        const jettyname = features.properties.Name;

        jettyPoints.push({ position, jettyname });
    });
    return jettyPoints;
}

// Fetch and convert bathymetry data
async function fetchAndConvertRouteData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return convertRouteToPaths(data);
    } catch (error) {
        console.error('Error fetching bathymetry data:', error);
        return [];
    }
}

// URL to fetch bathymetry data
const bathymetryDataUrl = 'https://raw.githubusercontent.com/Dhareey/CSV/main/bathymety.json';
const routeDataUrl = "https://raw.githubusercontent.com/Dhareey/CSV/main/routes.js";
const jettyDataUrl = "https://raw.githubusercontent.com/Dhareey/CSV/main/jetty_complete.js";
const landingDataUrl = "https://raw.githubusercontent.com/Dhareey/CSV/main/jetty_landings.js";

// Call the function and assign the result to poly
export const poly = await fetchAndConvertBathyData(bathymetryDataUrl);
export const routepath = await fetchAndConvertRouteData(routeDataUrl);

export const jettypoint = fetchAndConvertJettyData(jettyDataUrl);
export const landings = fetchAndConvertRouteData(landingDataUrl);

// Create Map Layers
//let bathymetryLayer = createBathymetryLayer(poly)
//let routeLayer = createRouteLayer(routepath)
//let jettyLayer = createJettyLayer(jettypoint)
//let landingLayer = createLandingLayer(landings)

// Step 3 and 4
export var deckContainer = new DeckGL({
    mapStyle:
        "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    initialViewState: {
        longitude: 3.463221,
        latitude: 6.502195,
        zoom: 12,
        maxZoom: 20,
        pitch: 85,
        bearing: 0,
    },
    controller: true,
    getTooltip: ({ object }) => {
        if (object && object.depth !== undefined) {
            return `Depth: ${object.depth}`;
        } else if (object && object.avg_depth !== undefined) {
            return `Route name: ${object.name}
    Average Depth: ${object.avg_depth}m`;
        }
    }
});


