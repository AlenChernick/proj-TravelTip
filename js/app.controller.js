import { locService } from "./services/loc.service.js"
import { mapService } from "./services/map.service.js"

window.onload = onInit
window.onAddMarker = onAddMarker
window.onPanTo = onPanTo
window.onGetLocs = onGetLocs
window.onGetUserPos = onGetUserPos
window.onSaveLocation = onSaveLocation
<<<<<<< HEAD
=======
window.onGoToLocation = onGoToLocation
window.onDeleteLocation = onDeleteLocation
>>>>>>> 2be192bc5447e3738f0d152db8aa7f09ed9f931d

function onInit() {
  mapService
    .initMap()
    .then(() => {
      console.log("Map is ready")
    })
    .catch(() => console.log("Error: cannot init map"))
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
  console.log("Getting Pos")
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

// TODO: FIX THIS
// function onSearchLocation() {
//     searchLocation()
// }

function onAddMarker() {
  console.log("Adding a marker")
  mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 })
}

function onSaveLocation() {
  let locationName = prompt("Please provide place name:")
  locService.saveLocationToStorage(locationName)
}

function onDeleteLocation() {
    locService.deleteLocation()
}

function onGetLocs() {
<<<<<<< HEAD
  var str = ""
  locService.getLocs().then((locs) => {
    locs.map((loc, idx) => {
      str += `
         (${idx}) Location:${loc.name} ,lat:${loc.lat.toFixed(
        2
      )}, lang:${loc.longetiude.toFixed(2)}\n`
=======
    var strHTML = ""
    locService.getLocs().then((locs) => {
        locs.map((loc) => {
            strHTML += `
            <details class='user-location-details'>
            <summary>${loc.name}</summary>
            <p>
              <ul>
                <li class="clean-list">Corridnates: lat: ${loc.lat.toFixed(2)} , lng: ${loc.longetiude.toFixed(2)}</li>
                <button onclick="onDeleteLocation()">Delete</button>
                <button onclick="onGoToLocation(${loc.lat}, ${loc.longetiude})">Go To Location</button>
                </p>
          </details>
            `
        })
        document.querySelector(".user-locations").innerHTML = strHTML
        // console.log(locs)
        // return locs
>>>>>>> 2be192bc5447e3738f0d152db8aa7f09ed9f931d
    })
    document.querySelector(".locs").innerText = str
    // console.log(locs)
    // return locs
  })
}
var userPos

function onGetUserPos() {
  getPosition()
    .then((pos) => {
        onPanTo(pos.coords.latitude,pos.coords.longitude)
      console.log("User position is:", pos.coords)
      document.querySelector(".user-pos").innerText = `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
    })
    .catch((err) => {
      console.log("err!!!", err)
    })
}
function onPanTo(x,y) {
  console.log(userPos)
  console.log("Panning the Map")
  mapService.panTo(x,y)
}
