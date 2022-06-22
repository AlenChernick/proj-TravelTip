export const mapService = {
    initMap,
    addMarker,
    panTo,
    getLatLeng,
}
var gMap
var gLocation

function initMap(lat = 32.0749831, lng = 34.9120554) {
    console.log("InitMap")
    return _connectGoogleApi().then(() => {
        console.log("google available")
        gMap = new google.maps.Map(document.querySelector("#map"), {
            center: { lat, lng },
            zoom: 15,
        })
        console.log("Map!", gMap)
    })
}

function addMarker(loc) {
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to set marker!",
        position: loc,
    })

    infoWindow.open(gMap)

    // Configure the click listener.
    gMap.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close()

        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        })
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        )
        infoWindow.open(gMap)
        var marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: gMap,
            title: "Dont tuch me!!",
            // icon: '😎',
        })
        const lat = mapsMouseEvent.latLng.lat()
        const lng = mapsMouseEvent.latLng.lng()
        gLocation = { lat, lng }
        console.log(gLocation);
    })
    // return marker;
}

function getLatLeng() {
    gMap.addListener('click', (mapsMouseEvent) => {
        const lat = mapsMouseEvent.latLng.lat()
        const lng = mapsMouseEvent.latLng.lng()
        gLocation = { lat, lng }
    })
    // console.log(gLocation);
    return gLocation
}

function panTo(lat, lng) {
    var laLatLng = new google.maps.LatLng(lat, lng)
    gMap.panTo(laLatLng)
}

function _connectGoogleApi() {
    if (window.google) return Promise.resolve()
    const API_KEY = "AIzaSyDfcnHbNhQIaEJqLmNV9jnO9zN43n_euTw" //TODO: Enter your API Key
    var elGoogleApi = document.createElement("script")
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    elGoogleApi.async = true
    document.body.append(elGoogleApi)

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve
        elGoogleApi.onerror = () => reject("Google script failed to load")
    })
}
