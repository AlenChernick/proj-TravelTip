import { caschStorageService } from './storage-service.js'
import { mapService } from './map.service.js'

export const locService = {
  getLocs,
  saveLocationToStorage,
  onloadFromStroage,
}
window.onload = onloadFromStroage

// const locs
let LOCATION_KEY = "locationsDB"
let id = 1
const locs = [
  { name: "Greatplace", lat: 32.047104, lng: 34.832384 },
  { name: "Neveragain", lat: 32.047201, lng: 34.832581 },
]

function saveLocationToStorage(locationName) {

  let loc = mapService.getLatLeng()
  console.log(loc);
  locs.push({
    id: id++,
    name: locationName,
    lat: latetiude,
    longetiude: longetiude,
    createdAt: Date.now(),
    upDatedAt: Date.now(),
  })

  caschStorageService.saveToStorage(LOCATION_KEY, locs)
}

function onloadFromStroage() {
  if (!locs.length || locs === {}) {
    locs = caschStorageService.loadFromStorage(LOCATION_KEY)
  }
}

function getLocs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(locs)
    }, 2000)
  })
}
