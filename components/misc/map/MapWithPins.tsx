import React, { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { nearbyLocations } from '@/data/seed'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapWithPins = () => {
  const useReferenceIcon = () => {
    return useMemo(() => {
      if (typeof window === 'undefined') return undefined
      return L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [38, 38],
      })
    }, [])
  }
  const referenceIcon = useReferenceIcon()

  return (
    <MapContainer
      style={{ height: '500px', width: '100%' }}
      center={[40.67379787643575, -74.0146123896947]}
      zoom={16}
      scrollWheelZoom={false}
      className='rounded-lg'
      attributionControl={false}
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />

      {nearbyLocations.map((loc, index) => (
        <Marker key={loc.id + index} position={[loc.position.lat, loc.position.lng]} icon={index === 0 ? referenceIcon : new L.Icon.Default()}>
          <Tooltip permanent>{loc.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapWithPins
