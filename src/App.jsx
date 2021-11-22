import { MapContextProvider } from "./contexte/Map"

const App=()=>{

console.log(MapContextProvider);
  return(
    <MapContextProvider>
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
      <p>hello</p>
    </MapContextProvider>
  )
}
export default App

