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
        'OpenStreetMap': OpenStreetMap,
        'Stadia Maps': stadiaMaps
    }

    const layerControls = L.control.layers(baseLayers, {}, {}).addTo(mymap)


    /* mymap.on('resize', function(e) {
        mymap.flyTo([0, 0]);
    }) */


}