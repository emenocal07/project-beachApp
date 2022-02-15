// const APIHandler = require("../services/api-handler.js");
// const BeachAPI = new APIHandler();

let map

function initMap() {
    drawMap()
    getFullList()

    
    
    

}

function drawMap() {

    const { Map } = google.maps

    map = new Map(
        document.getElementById('myMap'),
        {
            zoom: 10,
            center: { lat: 40.392499, lng: -3.698214 },
            
        }
    )
}

// function getRestaurants() {

//     axios.get('/api/restaurants')
//         .then(response => printRestaurantsMarkers(response.data))
//         .catch(err => console.log(err))
// }

function printMarkers(restaurants) {

    const { Marker } = google.maps

    restaurants.forEach(elm => {

        new Marker({
            map,
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    })
}