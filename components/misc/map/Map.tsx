import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useMemo } from 'react'

import { useEffect } from 'react'

export default function Map({ pin }: { pin: { position: { lat: number; lng: number }; name: string }[] }) {
  const FitBounds = ({ pins }: { pins: { position: { lat: number; lng: number } }[] }) => {
    const map = useMap()

    useEffect(() => {
      if (pins.length >= 2) {
        const bounds = L.latLngBounds(pins.map((pin) => pin.position))
        map.flyToBounds(bounds, {
          padding: [50, 50],
          duration: 1.5,
        })
      } else if (pins.length === 1) {
        map.flyTo(pins[0].position, 15, { duration: 1.5 })
      }
    }, [pins, map])

    return null
  }

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
    <div>
      <MapContainer
        center={pin[0].position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: '466px' }}
        className='rounded-lg'
        attributionControl={false}
      >
        <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />

        <FitBounds pins={pin} />

        <Marker position={pin[0].position} icon={referenceIcon}>
          <Tooltip permanent direction='top'>
            <div className='text-sm text-gray-500'>{pin[0].name}</div>
          </Tooltip>
        </Marker>
        <Marker position={pin[1].position}>
          <Tooltip permanent direction='top'>
            <div className='text-sm text-gray-500'>{pin[1].name}</div>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  )
}
