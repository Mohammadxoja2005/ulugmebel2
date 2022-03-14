import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"; 

function News() {  

  const [prev, setPrev] = useState(true);   
  const fakeData = [
    {
      title: 'Мебель', 
      description: 'Офиса',
      // price: 300,  
      imgUrl: 'assets/img/news/off4.webp', 

    }, 
    {
      title: 'Мебель', 
      description: 'Дома',
      // price: 300,  
      imgUrl: 'assets/img/news/home11_50.webp', 
    }
  ]

  return (      
    <>
   <div className="split-banner-area mb-40 mb-sm-30" data-aos="fade-up">
      <div className="container">
       <div className="row row-5">
         {
           fakeData.map((value, index) => {
             return(
              <div key={index} className="col-md-6 mb-sm-10">
              {/*=======  single split banner  =======*/}   
              <div className="single-split-banner">
                <div className="single-split-banner__image">
                  <Link to="/shop">
                    <img
                      width={550}
                      height={260}
                      src={value.imgUrl}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="single-split-banner__image__content">
                      <p style={{color:"white"}} className="split-banner-title split-banner-title--light">
                        {value.title}
                      </p>
                      <p style={{color:"white"}} className="split-banner-title split-banner-title--price">
                        для
                      </p>
                      <p style={{color:"darkred"}} className="split-banner-title split-banner-title--bold">
                        {value.description}
                      </p>
                      {/* <p style={{color:"darkred"}} className="split-banner-title split-banner-title--price">
                        от <span style={{color:"white"}} className="amount">${value.price}</span>
                      </p> */}
                    </div>
                  </Link>
                </div>
              </div>
              {/*=======  End of single split banner  =======*/}
            </div>
             )
           })
         }
       </div>
     </div>
     </div>
    </> 

  )
} 

export default React.memo(News); 
