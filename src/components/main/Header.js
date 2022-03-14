import React from 'react'
import Slider from 'react-slick';  
import {Link} from "react-router-dom"; 

function Header() {  
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true, 
        rows: 1, 
         
        responsive:[
            {
				breakpoint: 1501,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 767,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 575,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 479,
				settings: {
					slidesToShow:1
				}
			},    
        ]
    }; 
    
    const fakeData = [
      {
        mainTitle: "Добро пожаловать на",
        announcement: "Ulug' Mebel", 
        brandName: "мебельный сайт",  
        imgUrl: "assets/img/header/firstshop.webp"
      }, 
      {
        mainTitle: "Большой ассортимент ",
        announcement: "Продукции", 
        brandName: "На любой вкус",  
        imgUrl: "assets/img/header/twio.webp"
      },  
      {
        mainTitle: "Качество",
        announcement: "Испытанное", 
        brandName: "Временем",  
        imgUrl: "assets/img/header/trio.webp"
      }, 
    ]

  return (
  <div className="hero-slider-area mb-40">

    <div className="hero-slider-wrapper">  
    <Slider {...settings}>
       {fakeData.map((value, index) => {
         return(
          <div key={index} className="single-slider-item">
          <div className="hero-slider-item-wrapper hero-slider-item-wrapper--fullwidth hero-slider-item-wrapper--fullwidth--maxheight hero-slider-bg-7" style={{backgroundImage: `url(${value.imgUrl})`}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-slider-content">
                    <p className="slider-title slider-title--small">
                      {value.mainTitle} 
                    </p>
                    <p className="slider-title slider-title--big-bold">
                      {value.announcement}
                    </p>
                    <p className="slider-title slider-title--big-light">
                      {value.brandName}
                    </p>
                    <Link
                      className="theme-button hero-slider-button"
                      to="/shop"
                    >
                      Купить сейчас
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         )
      }) 
      }
        
    </Slider>
    </div>
  </div>
  )
} 

export default React.memo(Header); 
