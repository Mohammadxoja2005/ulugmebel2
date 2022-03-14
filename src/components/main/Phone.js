import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"; 

function Phone() {
  return (
    <a href="tel: +998900168484" className="scroll-top" style={{display: "inline-block"}}>
       <BsFillTelephoneFill/>
    </a> 
  )
} 

export default React.memo(Phone); 
// style={{display: "flex", justifyContent: "center", alignItems: "center", }}