import { MapContextProvider } from "./contexte/Map"
import { Map } from "./components/Map";
import Marker from "./components/Marker";
// import GoogleMapReact from 'google-map-react'

const App=()=>{
  return(
    <MapContextProvider>
      <Map/>
    </MapContextProvider>
  )
}
export default App

