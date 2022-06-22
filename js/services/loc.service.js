import { caschStorageService } from './storage-service.js'
import { mapService } from './map.service.js'

export const locService = {
  getLocs,
  saveLocationToStorage,
  onloadFromStroage,
}
window.onload = onloadFromStroage
window.saveLocationToStorage = saveLocationToStorage

// const locs
let LOCATION_KEY = "locationsDB"
let id = 1
const locs = caschStorageService.loadFromStorage(LOCATION_KEY) || []

function saveLocationToStorage(locationName) {
  let { lat, lng } = mapService.getLatLeng()
  //   console.log(loc);
  locs.push({
    id: id++,
    name: locationName,
    lat: lat,
    longetiude: lng,
    createdAt: Date.now(),
    upDatedAt: Date.now(),
  })

  caschStorageService.saveToStorage(LOCATION_KEY, locs)
}

function onloadFromStroage() {
  if (!locs.length || locs === []) {
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
