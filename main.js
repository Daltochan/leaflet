window.onload = init;

function init() {
    const mymap = L.map('mapid', {
        center: [48, 14],
        minZoom: 4,
        zoom: 5,
        layers: [
            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            })
        ]
    })

   
}