let map
const latitude = Number(document.getElementById('geometry-x').innerHTML)
const longitude = Number(document.getElementById('geometry-y').innerHTML)
const beachTitle = document.getElementById('beachTitle').innerHTML

function initMap() {
    drawMap()
    printMarkers()
}

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: latitude, lng: longitude },
        }
    )
}

function printMarkers() {

    const { Marker } = google.maps

    new Marker({
        map,
        position: {
            lat: latitude,
            lng: longitude,
        },
        title: beachTitle
    })
}