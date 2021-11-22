import { createContext , useState,useEffect} from "react";
// import Bars from "../bars.json"


const mapContext = createContext({})

const MapContextProvider = (props)=>{

    const [location , setLocation] =useState(null)
    // const [bars, setBars]=useState(Bars)

    const value={
        location , 
        // bars
    }
    
     useEffect(() => {
    console.log("Récupération de la localisation...")

    navigator.geolocation.getCurrentPosition(
      location => {
        console.log(location.coords)
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      },
      error => {
        console.log(error)
      }
    )
  }, [])
console.log(location);


    return(
        <MapContextProvider value={value}>
            {props.children}
        </MapContextProvider>
    )
}

export {
    mapContext,
    MapContextProvider
}