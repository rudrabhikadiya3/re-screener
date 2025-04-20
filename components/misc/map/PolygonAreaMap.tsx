import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet'
import L, { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface PolygonAreaMapProps {
  polygonCoords: LatLngTuple[]
}

const FitPolygonBounds: React.FC<Pick<PolygonAreaMapProps, 'polygonCoords'>> = ({ polygonCoords }) => {
  const map = useMap()

  useEffect(() => {
    if (polygonCoords.length > 0) {
      const bounds = L.latLngBounds(polygonCoords)
      map.fitBounds(bounds, { padding: [40, 40] })
    }
  }, [polygonCoords, map])

  return null
}

const PolygonAreaMap: React.FC<PolygonAreaMapProps> = ({ polygonCoords }) => {
  return (
    <MapContainer
      style={{ height: '500px', width: '100%' }}
      center={[0, 0]}
      zoom={13}
      scrollWheelZoom={true}
      className='rounded-lg'
      attributionControl={false}
    >
      <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />

      {polygonCoords.length > 2 && (
        <>
          <Polygon
            positions={polygonCoords}
            pathOptions={{
              color: 'orange',
              fillColor: '#FFA500',
              fillOpacity: 0.4,
            }}
          />
          <FitPolygonBounds polygonCoords={polygonCoords} />
        </>
      )}
    </MapContainer>
  )
}

export default PolygonAreaMap
