import { useEffect, useState, ReactNode } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import DefaultPopup from './DefaultPopup'
import 'leaflet/dist/leaflet.css'
import './styles.css'
import { DEFAULT_CENTER, DEFAULT_ZOOM, icon } from './config'
import { MapPoint } from './types'

type MapProps = {
  points?: MapPoint[]
  center?: [number, number]
  zoom?: number
  className?: string
  renderPopup?: (point: MapPoint) => ReactNode
  onMapClick?: (lat: number, lng: number) => void
}

// Компонент для отслеживания кликов по карте
const MapClickHandler = ({ onClick }: { onClick: (lat: number, lng: number) => void }) => {
  useMapEvents({
    click: e => {
      onClick(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

const defaultRenderPopup = (point: MapPoint) => <DefaultPopup point={point} />

const Map = ({
  points = [],
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  className = 'flex-1 w-full',
  renderPopup = defaultRenderPopup,
  onMapClick,
}: MapProps) => {
  const [mapReady, setMapReady] = useState(false)

  // Ensure map is initialized after component is mounted
  useEffect(() => {
    setMapReady(true)
  }, [])

  return (
    <div className={className}>
      {mapReady && (
        <MapContainer
          center={center}
          zoom={zoom}
          maxZoom={18}
          className='map-container'
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {onMapClick && <MapClickHandler onClick={onMapClick} />}
          <MarkerClusterGroup>
            {points.map(point => (
              <Marker
                key={point.id}
                position={point.position}
                icon={icon}
              >
                <Popup>{renderPopup(point)}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </div>
  )
}

export default Map
