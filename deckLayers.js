const { DeckGL, PathLayer, PolygonLayer, ColumnLayer } = deck;


/// Bathymetry Layer
export function createBathymetryLayer(poly, show) {
    return new PolygonLayer({
        id: "polygon-layer",
        data: poly,
        extruded: true,
        stroked: true,
        filled: true,
        wireframe: false,
        lineWidthMinPixels: 0,
        getPolygon: (d) => d.contour,
        getElevation: (d) => d.depth,
        getFillColor: (d) => {
            // Color based on depth
            const depth = d.depth;
            switch (true) {
                case depth > -24 && depth <= -23:
                    return [8, 48, 107
                    ]
                case depth > -23 && depth <= -22:
                    return [8, 59, 124
                    ]
                case depth > -22 && depth <= -21:
                    return [8, 71, 141
                    ]
                case depth > -21 && depth <= -20:
                    return [9, 82, 157
                    ];
                case depth > -20 && depth <= -19:
                    return [18, 94, 166
                    ]
                case depth > -19 && depth <= -18:
                    return [26, 105, 174
                    ];
                case depth > -18 && depth <= -17:
                    return [36, 116, 182
                    ];
                case depth > -17 && depth <= -16:
                    return [47, 127, 188
                    ];
                case depth > -16 && depth <= -15:
                    return [59, 139, 194
                    ];
                case depth > -15 && depth <= -14:
                    return [71, 150, 200
                    ];
                case depth > -14 && depth <= -13:
                    return [
                        86, 159, 206
                    ];
                case depth > -13 && depth <= -12:
                    return [
                        100, 169, 211
                    ];
                case depth > -12 && depth <= -11:
                    return [
                        116, 179, 216
                    ];
                case depth > -11 && depth <= -10:
                    return [
                        134, 189, 220
                    ];
                case depth > -10 && depth <= -9:
                    return [151, 198, 224];
                case depth > -9 && depth <= -8:
                    return [167, 206, 228]
                case depth > -8 && depth <= -7:
                    return [181, 212, 233];
                case depth > -7 && depth <= -6:
                    return [195, 218, 238];
                case depth > -6 && depth <= -5:
                    return [204, 223, 241];
                case depth > -5 && depth <= -4:
                    return [213, 224, 244];
                case depth > -4 && depth <= -3:
                    return [213, 234, 246];
                case depth > -3 && depth <= -2:
                    return [230, 240, 249];
                case depth > -2 && depth <= -1:
                    return [238, 245, 252];
                case depth > -1 && depth <= 0:
                    return [247, 251, 255];
                default:
                    return [0, 0, 255]; // Black (default color)
            }
        },
        getLineColor: (d) => {
            // Color based on depth
            const depth = d.depth;
            switch (true) {
                case depth > -21 && depth <= -20:
                    return [8, 48, 107
                    ]
                case depth > -23 && depth <= -22:
                    return [8, 59, 124
                    ]
                case depth > -22 && depth <= -21:
                    return [8, 71, 141
                    ]
                case depth > -21 && depth <= -20:
                    return [9, 82, 157
                    ];
                case depth > -20 && depth <= -19:
                    return [18, 94, 166
                    ]
                case depth > -19 && depth <= -18:
                    return [26, 105, 174
                    ];
                case depth > -18 && depth <= -17:
                    return [36, 116, 182
                    ];
                case depth > -17 && depth <= -16:
                    return [47, 127, 188
                    ];
                case depth > -16 && depth <= -15:
                    return [59, 139, 194
                    ];
                case depth > -15 && depth <= -14:
                    return [71, 150, 200
                    ];
                case depth > -14 && depth <= -13:
                    return [
                        86, 159, 206
                    ];
                case depth > -13 && depth <= -12:
                    return [
                        100, 169, 211
                    ];
                case depth > -12 && depth <= -11:
                    return [
                        116, 179, 216
                    ];
                case depth > -11 && depth <= -10:
                    return [
                        134, 189, 220
                    ];
                case depth > -10 && depth <= -9:
                    return [151, 198, 224];
                case depth > -9 && depth <= -8:
                    return [167, 206, 228]
                case depth > -8 && depth <= -7:
                    return [181, 212, 233];
                case depth > -7 && depth <= -6:
                    return [195, 218, 238];
                case depth > -6 && depth <= -5:
                    return [204, 223, 241];
                case depth > -5 && depth <= -4:
                    return [213, 224, 244];
                case depth > -4 && depth <= -3:
                    return [213, 234, 246];
                case depth > -3 && depth <= -2:
                    return [230, 240, 249];
                case depth > -2 && depth <= -1:
                    return [238, 245, 252];
                case depth > -1 && depth <= 0:
                    return [247, 251, 255];
                default:
                    return [0, 0, 255]; // Black (default color)
            }
        },
        getLineWidth: (d) => 0,
        pickable: true,
        visible: show
    });
}

// Bathymetry



/// Route Layer

export function createRouteLayer(routepath, show) {
    return new PathLayer({
        id: "GridLayer",
        data: routepath, // Provide your route dataset here
        getPath: (d) => d.path, // Assuming your route dataset has a 'path' property
        getColor: (d) => {
            const routename = d.name;
            switch (routename) {
                case "Agboyi-Ajah":
                    return [103, 0, 13];
                    break;
                case "Ajah-Takwa Bay":
                    return [147, 11, 19];
                    break;
                case "Amuwo-Odofin to Falomo":
                    return [179, 18, 24];
                    break;
                case "Baiyeku-Ajah":
                    return [201, 24, 29];
                    break;
                case "Baiyeku-Falomo":
                    return [221, 42, 37];
                    break;
                case "Falomo- Ikorodu":
                    return [240, 62, 46];
                    break;
                case "Falomo-Ajah":
                    return [246, 87, 62];
                    break;
                case "Falomo-Ilado":
                    return [251, 112, 80];
                    break;
                case "Falomo-Oworonsoki":
                    return [252, 134, 102];
                    break;
                case "Falomo-Takwa Bay":
                    return [252, 156, 126];
                    break
                case "Ikorodu-Ebutu Ero":
                    return [252, 179, 152];
                    break;
                case "Ikorodu-Takwa Bay":
                    return [253, 200, 178];
                    break;
                case "Osborne-Ikorodu":
                    return [254, 220, 205];
                    break;
                case "Oworonsoki-Oshodi":
                    return [254, 233, 224];
                    break;
                default:
                    return [0, 255, 0];
                    break;
            }
        }, // Red color for routes
        getWidth: 40, // Width of the route lines
        getDashArray: [8, 4], // Dashed line effect
        pickable: true,
        visible: show
    })
}

// Jetty Layer

export function createJettyLayer(jettypoint, show) {
    return new PolygonLayer({
        id: "polygonLayer",
        data: jettypoint,
        extruded: true,
        stroked: true,
        filled: true,
        wireframe: true,
        lineWidthMinPixels: 0,
        getPolygon: (d) => d.position,
        getElevation: (d) => 100,
        getFillColor: [225, 0, 0],
        getLineColor: [225, 0, 0],
        getLineWidth: (d) => 90,
        pickable: true,
        visible: show
    });
}

export function createLandingLayer(landings, show) {
    return new PolygonLayer({
        id: "polygonLayer2",
        data: landings,
        extruded: true,
        stroked: true,
        filled: true,
        wireframe: true,
        lineWidthMinPixels: 0,
        getPolygon: (d) => d.position,
        getElevation: (d) => 10,
        getFillColor: [0, 0, 255],
        getLineColor: [255, 0, 0],
        getLineWidth: (d) => 0,
        pickable: true,
        visible: show
    })
}