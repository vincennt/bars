import GoogleMapReact from 'google-map-react'
import { useContext } from "react";
import { MapContext } from "../contexte/Map";
import styled from 'styled-components'
import Marker from './Marker';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map =()=>{
    const userLocation = useContext(MapContext)
    
    if(!userLocation.location){
        return(
            <p>Loading Data , please wait </p>
        )
    }
    return(
        
        <MapContainer>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={userLocation.location}
            defaultZoom={18}
            >
            <Marker
          
            />
            </GoogleMapReact>         
        </MapContainer>
       
    )
}

export{
    Map
}