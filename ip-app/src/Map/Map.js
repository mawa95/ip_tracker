import React, {
 
  useEffect
} from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pin from '../../src/images/icon-location.svg'


const markerIcon = new L.icon({
  iconUrl: pin,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(46, 56),
})

function MyMarker ({info}){
  const map = useMap()
    
  useEffect(()=>{
    if (!info){
      return null
    }
    
    map.flyTo([info.location.lat, info.location.lng]);
  }, [info])
    return(
       <Marker icon={markerIcon}  position={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']}  >
         
      </Marker>
    )
}
function Map({info}) {
 

return ( 
      <MapContainer center={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']} zoom={15} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
        
        <MyMarker info={info}/>
      </MapContainer>
    )
}

export default Map;