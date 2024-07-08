// This script handles all operations in the map legend
// Operations includes: 
// Changing basemaps
// Switching  layers on/off
// Query tools
// Search bar

import { deckContainer, poly, routepath, jettypoint, landings } from "https://raw.githubusercontent.com/Dhareey/CSV/main/deck.js";
import { createBathymetryLayer, createRouteLayer, createJettyLayer, createLandingLayer } from "https://raw.githubusercontent.com/Dhareey/CSV/main/deckLayers.js";


//1. Change Basemaps based on selection
document.querySelectorAll('input[type="radio"][name="basemap"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        if (event.target.value == 'positron') {
            deckContainer.setProps({
                mapStyle: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            })
        } else if (event.target.value == "dark-matter") {
            deckContainer.setProps({
                mapStyle: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            })
        }

    });
});


//2. Switch layers on and off based on selection
//Bathymetry layer
function toggleLegend() {
    let showBathymetry = document.getElementById('bathyLayerCheckbox').checked
    let showRoute = document.getElementById('routeLayerCheckbox').checked
    let showJetty = document.getElementById("jettyLayerCheckbox").checked
    let showLanding = document.getElementById("landingsLayerCheckbox").checked

    let layers = [
        createBathymetryLayer(poly, showBathymetry), createRouteLayer(routepath, showRoute), createJettyLayer(jettypoint, showJetty), createLandingLayer(landings, showLanding)
    ]

    deckContainer.setProps({ layers });
}

toggleLegend();

window.toggleLegend = toggleLegend;
