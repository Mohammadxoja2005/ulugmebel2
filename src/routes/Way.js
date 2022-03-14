import React, {useEffect, Suspense, lazy} from "react"; 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Contact, About} from '../frontendPages';
// import {Dashboard, MainPageAdmin} from '../adminPages';
import Shop from '../shop/Shop'; 
import Aos from "aos";  
// import { BallBeat } from 'react-pure-loaders';


const Home = lazy(() => import('../frontendPages/Home'))
// const Contact = lazy(() => import('../frontendPages/Contact'))
// const About = lazy(() => import('../frontendPages/About'))

function Image() {
  return(
    <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "300px", paddingTop: "300px"}} >
      <h2>Just moment...</h2>
      {/* <div>
        <BallBeat
          color={'#123abc'}
          loading={true}
        />
      </div> */}
    </div>
    )

}

function Way() { 

useEffect(() => {
  Aos.init({})
}, [])  

  return (
    <>
        {/* <Router>
        <Routes>
            <Route exact path="/admin" element={<Dashboard/>}/>
            <Route exact path="/admin/main" element={<MainPageAdmin/>}/>
        </Routes>
    </Router> */}
    <Router>
          <Suspense fallback={<Image/>}> 
            <Routes> 
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/shop" element={<Shop/>}/>
            </Routes> 
         </Suspense>
    </Router>
   </>
    
  )
} 

export default React.memo(Way);   


