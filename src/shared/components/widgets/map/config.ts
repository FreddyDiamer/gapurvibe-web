import L from 'leaflet'

// Define default coordinates as LatLngTuple
export const DEFAULT_CENTER: [number, number] = [55.751244, 37.618423] // Moscow coordinates
export const DEFAULT_ZOOM = 13

export const icon = L.icon({
  iconUrl: '/icons/map-mark.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [7, -40],
})
