import React from 'react'
import Slider from 'react-slick'
import Skeleton from 'react-loading-skeleton'

function Instagram() {  

   const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 5000,
        arrows: false,
        rows: 2,   
        responsive:[  
        {
            breakpoint: 1501, 
            settings: {
                slidesToShow: 4, 
            }
        }, 
        {
            breakpoint: 1199, 
            settings: {
                slidesToShow: 4, 
            }
        },
        {
            breakpoint: 991, 
            settings: {
                slidesToShow: 3, 
            }
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 4, 
            }
        },
        {
            breakpoint: 575, 
            settings: {
                slidesToShow: 4, 
            }
        }, 
        {
            breakpoint: 479, 
            settings: {
                slidesToShow: 2, 
            }
        },    
    ] 
   }

    const fakeData = [
        {
          url: "https://www.instagram.com/ulug_mebel/", 
          imgUrl: "assets/img/instagram/ins3_1_35.webp"
        }, 
        {
         url: "https://www.instagram.com/ulug_mebel/", 
         imgUrl: "assets/img/instagram/ins2_1_35.webp"
        }, 
        {
         url: "https://www.instagram.com/ulug_mebel/", 
         imgUrl: "assets/img/instagram/ins_1_35.webp"
        }, 
        {
         url: "https://www.instagram.com/ulug_mebel/", 
         imgUrl: "assets/img/instagram/ins4_1_35.webp"
        }, 
        {
         url: "https://www.instagram.com/ulug_mebel/", 
         imgUrl: "assets/img/instagram/ins5_1_35.webp"
       }, 
       {
        url: "https://www.instagram.com/ulug_mebel/", 
        imgUrl: "assets/img/instagram/ins6_1_35.webp"
       }, 
       {
        url: "https://www.instagram.com/ulug_mebel/", 
        imgUrl: "assets/img/instagram/ins7_1_35.webp"
       }, 
       {
        url: "https://www.instagram.com/ulug_mebel/", 
        imgUrl: "assets/img/instagram/ins1_1_35.webp"
       }, 
    ]

    console.log(window); 

  return (
    <Slider {...settings}>
    {
      fakeData.map((value, index) => { 
        return(
        <div key={index} className="single-instagram-image">
          <a onClick={() => window.open(value.url, "_blank")} >
            <img
              width={320}
              height={320}
              src={value.imgUrl}
              className="img-fluid"
              alt=""
            />
          </a>
        </div> 
        )
      })
    }
  </Slider>
  )
} 

export default React.memo(Instagram); 
