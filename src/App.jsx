import { MapContextProvider } from "./contexte/Map"
import { Map } from "./components/Map";
import Marker from "./components/Marker";
// import GoogleMapReact from 'google-map-react'

const App=()=>{
console.log(MapContextProvider);
  return(
    <MapContextProvider>
      <Map/>
      
         {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={myPosition}
        defaultZoom={14}
      >
        <Marker
          lat={myPosition.lat}
          lng={myPosition.lng}
        />
      </GoogleMapReact> */}
      
    </MapContextProvider>
  )
}
export default App

