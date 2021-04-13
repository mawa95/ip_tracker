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


const markerIcon = new L.icon({
  iconUrl: require("../images/icon-location.svg"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 35),
})
function MyMarker ({info}){
  const map = useMap()
  
  
  console.log('map center:', map.getCenter())
    
  useEffect(()=>{
    if (!info){
      return null
    }
    
    map.flyTo([info.location.lat, info.location.lng]);
  }, [info])
    return(
       <Marker  position={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']}  >
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
      </Marker>
    )
}
function Map({info}) {
 

return ( 
      <MapContainer center={[(info !== undefined) ? info.location.lat : '', (info !== undefined) ? info.location.lng : '']} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
        
        <MyMarker info={info}/>
      </MapContainer>
    )
}

export default Map;