window.onload = init;

function init() {

    const OpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    const stadiaMaps = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    })


    const mymap = L.map('mapid', {
        center: [48, 14],
        minZoom: 4,
        zoom: 5,
        layers: [OpenStreetMap]
    })

    const baseLayers = {
        '<b>OpenStreetMap</b>': OpenStreetMap,
        'Stadia Maps': stadiaMaps
    }

    const layerControl = L.control.layers(baseLayers, {}, {}).addTo(mymap)

    const mapImage = "./data/ave.png";
    const mapBounds = [[52.395534262108036, 16.947627303953514], [52.40958147969384, 16.997452020282616]]
    const overlayMap = L.imageOverlay(mapImage, mapBounds).addTo(mymap)

    /* mymap.on('resize', function(e) {
        mymap.flyTo([0, 0]);
    }) */


}