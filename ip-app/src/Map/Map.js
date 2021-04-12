import React, {
 
  useEffect
} from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';


// const markerIcon = new L.icon({
//   iconUrl: require("../images/icon-location.svg"),
//   iconAnchor: null,
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(30, 35),
// })

function Map({info}) {
  console.log(info)

    return ( 
      <MapContainer center={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']} zoom={1} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker  position={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']} >
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        
        
      </MapContainer>
    )
}

export default Map;