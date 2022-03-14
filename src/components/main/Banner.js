import React, {useState, useEffect, useRef} from 'react'
import Slider from 'react-slick'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'; 
import MainWindowModal from '../../modals/MainWindowModal'; 

function SamplePrevArrow(props) {
    const { className, onClick} = props;
    return ( 
      <div
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}
        className={className}
        onClick={onClick}
      ><GrFormPrevious/></div>
    );
} 

function SampleNextArrow(props) {
    const { className, onClick} = props;
    return (
        <div 
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}
        className={className}
        onClick={onClick}
      ><GrFormNext/></div>
    );
} 

 function Banner() { 
  const fsettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: true, 
        infinite: true,  
        rows: 1, 
        prevArrow: <SamplePrevArrow />, 
        nextArrow: <SampleNextArrow />,  
        responsive:[
                {
                    breakpoint: 1501,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow:2
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
                        slidesToShow:1,  
                        arrows: false, 
                    }
                }, 
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow:1,  
                        arrows: false, 
                    }
                },  
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow:1,  
                        arrows: false, 
                    }
                },  
        ]
  }  

  const ssettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000, 
        arrows: false, 
        responsive:[  
            {
                breakpoint: 1501,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 1199,
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
  } 

  const thsettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000, 
    speed: 1000,
    infinite: false,
    arrows: false,
    // asNavFor: ".big-image-double-slider",
    focusOnSelect: true,
    // prevArrow: {"buttonClass": "slick-prev", "iconClass": "ion-ios-arrow-left" },
    // nextArrow: {"buttonClass": "slick-next", "iconClass": "ion-ios-arrow-right" },
    infinite: true, 
    
    responsive:[
    {
        breakpoint: 1501, 
        settings: {
            slidesToShow: 2, 
        }, 

    }, 
    {
        breakpoint: 1199, 
        settings: {
            slidesToShow: 2, 
        }, 

    },   
    {
        breakpoint: 991, 
        settings: {
            slidesToShow: 2, 
        }, 

    },  
    {
        breakpoint: 767, 
        settings: {
            slidesToShow: 2, 
        }, 

    },  
    {
        breakpoint: 575, 
        settings: {
            slidesToShow: 2, 
        }, 

    },  
    {
        breakpoint: 479, 
        settings: {
            slidesToShow: 2, 
        }, 

    }, 
    ] 
  }

  const fakeData = [
    { 
      title: "Спальная", 
      description: "То место, где вы проводите самые прекрасные часы своей жизни.", 
      // avaibility: 120,
      discount: 0, 
      // price: 100,
      // product: "Оффис", 
      imgUrl: ["assets/img/products/bedroom/Bedroom11.webp", "assets/img/products/bedroom/Bedroom22.webp"], 
    },   
    { 
      title: "Кухня", 
      description: "Место, где люди с удовольствием собирается в кругу всей семьи.", 
      // avaibility: 120,  
      discount: 10, 
      // price: 100,
      // product: "Оффис", 
      imgUrl: ["assets/img/products/kitchen/Kitchen11.webp", "assets/img/products/kitchen/Kitchen22.webp"],  
    },  
    { 
      title: "Шкафы", 
      description: "Уникальный мебели для вашего дома.", 
      // avaibility: 120,  
      discount: 9, 
      // price: 100,
      // product: "Оффис", 
      imgUrl: ["assets/img/products/cupboard/cup2.webp", "assets/img/products/cupboard/cup3.webp"],  
    },
    { 
      title: "Гостиная", 
      description: "Центральное место в интерьере современной дома.", 
      // avaibility: 120,  
      discount: 5, 
      // price: 100,
      // product: "Оффис", 
      imgUrl: ["assets/img/products/livingroom/livingRoom11.webp", "assets/img/products/livingroom/livingroom22.webp"],  
    },
  ];   
  const [show, setShow] = useState({state: false, id: null});  
  
  return (

   <div  className="product-single-row-double-slider-area mb-40">
    <MainWindowModal show={show} fakeData={fakeData} setShow={setShow}/>
     
     <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        {/*=======  section title  =======*/}
        <div className="section-title mb-20">
          <h1>Мебель для дома</h1>
        </div>
        {/*=======  End of section title  =======*/}
      </div>
      <div className="col-lg-5 position-relative">
        {/* <div className="counter-deal">
          Ends in:{" "}
          <div className="deal-countdown" data-countdown="2025/01/01" />
        </div> */}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
          <div className="product-single-row-double-slider-wrapper">
              <Slider {...fsettings}> 
              {fakeData.map((value, index) => {
                  return(   
                  <div key={index} className="double-slider-single-item">
                    <div className="double-slider-single-item__inner-slider">
                      <div className="big-image-slider-wrapper"> 

                        <Slider {...ssettings}>
                         {value.imgUrl.map((url, index) => {
                            return(
                              <div key={index} className="big-image-slider-single-item">
                              <img
                                width={600}
                                height={600}
                                // src="assets/img/products/inner-big2-1.webp"
                                src={url} 
                                className="img-fluid"
                                alt=""
                              />
                             </div>
                            )
                          }) }
                        </Slider> 

                        <div className="hover-icons">
                          <ul>
                            <li>
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal-container"
                                onClick={() => setShow({state: true, id: index})}
                              >
                                <i className="icon-eye" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icon-heart" />
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="icon-sliders" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="small-image-slider-wrapper">
                        <Slider {...thsettings}>
                        {
                          value.imgUrl.map((url, index) => {
                            return(
                              <div onClick={() => setShow({state: true, id: index})} key={index} className="small-image-slider-single-item">
                              <img
                                width={80}
                                height={80}
                                // src="assets/img/products/inner-small2-1.webp"
                                src={url}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            )
                          })
                        }
                        </Slider>
                      </div>
                    </div>
                    <div className="double-slider-single-item__content mt-20">
                      <p className="product-title mb-15" style={{display: "block", width: "100%", 
  whiteSpace: "pre-line",  }}> 
    
                      {/* this is title part */}
    
    
                        <a href="#">{value.title}</a>
                    
                     {/* this is title part */}  
                      </p> 
    
                     {/* this is description part */}

                    <p className="product-short-desc mb-25" style={{ display: "block", width: "100%", 
  whiteSpace: "pre-line",  }}>
                          {value.description}
                      </p> 

 
    
                      {/* this is description part */}
    
                      <div className="product-availability mb-25">
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100} 
                          />
                        </div> 
    
                      {/* avaibility part */}
    
                        <div className="product-availability__text mb-0 mt-10">
                        {/* Продано:1400 */}
                          <div className="sold"></div>
                          {/* Доступно:230 */}
                          <div className="remaining"></div>
                        </div> 
    
    
                      {/* avaibility part */}
    
                      </div>
                      <span className="discount-label discount-label--static discount-label--red mb-10">
                        -{value.discount}%
                      </span>
                      <div className="rating">
                        <i className="ion-android-star active" />
                        <i className="ion-android-star active" />
                        <i className="ion-android-star active" />
                        <i className="ion-android-star active" />
                        <i className="ion-android-star" />
                      </div>  
          
                      {/*price part  */}
    
                      {/* <p className="product-price product-price--medium">
                        <span className="discounted-price">${value.price}</span>{" "}
                        <span className="main-price discounted">${Math.round(value.price * (1 +(value.discount / 100)))}</span>
                      </p>
                     */}
                     {/*price part  */}
    
                      <span className="cart-icon cart-icon--double-slider">
                        <a href="#">
                          <i className="icon-shopping-cart" />
                        </a>
                      </span>
                    </div>
                  </div> 
                  ) 
                })
              }
              </Slider>
            </div>


        {/*=======  End of product single row slider wrapper  =======*/}
      </div>
    </div>
  </div>
</div>
  )
}  

export default React.memo(Banner)