import { useContext } from "react";
import { MapContext } from "../contexte/Map";
import styled from 'styled-components'
import { FaMapMarkerAlt, FaTruckLoading } from 'react-icons/fa'


const PinContainer = styled.div`
 width: 40px;
  height: 40px;
  position: relative;
    `

const Marker =()=>{
    const BarData=useContext(MapContext)
    console.log(BarData);
return(
    <>
    {BarData.bars.map(bar=>
        <FaMapMarkerAlt 
        lat= {bar.location}
        lng={bar.location} 
        bar={bar.adress}
        key={bar.created_at}
        style={{ width: '20px', height: '40px', color: "red", position: "absolute", bottom: '100%', left: '-20px' }} />
)}
    </>
       
)

}

export default Marker