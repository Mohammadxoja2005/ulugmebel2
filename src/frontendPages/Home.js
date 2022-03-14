import React from 'react'; 
import {Header,FirstHead, News, Banner, Categories, BannerBack, Partners, Subscribe, Footer, BannerDouble, Phone} from '../components/main';   
import {Helmet} from "react-helmet-async"; 

function Home() {
  return (
    <> 
     <Helmet> 
     <link rel="canonical" href="/" /> 
     </Helmet>
     
     <div className="page-wrapper-red" style={{position: "relative"}}>
     <FirstHead/> 
     <Header/> 
     <News/>
     <Banner/>  
     <Categories />   
     <BannerBack />   
     <Partners/> 
     <Subscribe/> 
     <Footer/>   
     <Phone/>
    </div>  
    </>
  )
} 

export default React.memo(Home); 
