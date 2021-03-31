import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function Map({data}) {
  return ( 
    <MapContainer center={[37.38605, -122.08385]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.38605,-122.08385]}>
      <Popup>
        A pretty CSS3 popup. <br/> Easily customizable.
      </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;