import { MapContextProvider } from "./contexte/Map"

const App=()=>{

console.log(MapContextProvider);
  return(
    <MapContextProvider>
   <p>hi</p>
    </MapContextProvider>
  )
}
export default App

