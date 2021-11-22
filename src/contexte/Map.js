import { createContext , useState,useEffect} from "react";
import Bars from "../bars.json"


const MapContext = createContext()

const MapContextProvider = (props)=>{

    const [location , setLocation] =useState(null)
    const [bars, setBars]=useState(Bars)

    const value={
        location ,
        bars
    }
    
     useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => {
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
console.log(bars);


    return(
        <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
    )
}

export {
    MapContext,
    MapContextProvider
}