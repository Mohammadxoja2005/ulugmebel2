import React, {useState, useEffect, useRef} from 'react'
import Slider from 'react-slick'; 

function MainWindowModal(props) {
    const {show, setShow, fakeData} = props; 
    const [data, setData] = useState([]); 
    const [sliderData, setSliderData] = useState([]); 
    const modalRef = useRef(); 

    useEffect(() => { 

    fakeData.map((value, index) => {
      if(index == show.id) {
        setData(value);
        setSliderData(value.imgUrl);    
      }  
    })
    })

    const fsettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1000,   
      arrows: false, 
      responsive: [ 
          {
            breakpoint: 1501,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          }, 
          {
            breakpoint: 991,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          },  
          {
            breakpoint: 1199,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          },  
          {
            breakpoint: 767,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          },  
          {
            breakpoint: 575,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          }, 
          {
            breakpoint: 479,  
            settings: {
              slidesToShow:   1, 
            }, 
             
          },    
       ]
    } 

    const ssettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        // asNavFor: ".big-image-slider",
        focusOnSelect: true,
        arrows: false,
        // prevArrow: {"buttonClass": "slick-prev", "iconClass": "ion-ios-arrow-left" },
        // nextArrow: {"buttonClass": "slick-next", "iconClass": "ion-ios-arrow-right" },
        responsive: [ 
            {
              breakpoint: 1501,  
              settings: {
                slidesToShow:   2, 
              }, 
               
            }, 
            {
              breakpoint: 1199,  
              settings: {
                slidesToShow:   2, 
              }, 
               
            }, 
            {
                breakpoint: 991,  
                settings: {
                  slidesToShow:   2, 
                }, 
                 
              },  
            {
              breakpoint: 767,  
              settings: {
                slidesToShow:   2, 
              }, 
               
            },  
            {
              breakpoint: 575,  
              settings: {
                slidesToShow:   2, 
              }, 
               
            }, 
            {
              breakpoint: 479,  
              settings: {
                slidesToShow:   2, 
              }, 
               
            },    
         ]
    }  

    useEffect(() => { 
      let handler = (event) => {  
         if(!modalRef.current.contains(event.target)) {
           setShow(false);
         }  
        console.log(event.target)
       }     
  
       window.addEventListener('mousedown', handler); 
  
       return() => {
         document.removeEventListener('mousedown', handler); 
       }
     },[])   

    return (  
    <div >
    {show.state ? <div 
      className="modal fade quick-view-modal-container show animate__animated animate__fadeInDown animate__delay-0.01s"
      id="quick-view-modal-container"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
        <div ref={modalRef}  className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShow({state: false})}
            />          
          </div>

          <div className="modal-body">
            <div className="col-xl-12 col-lg-12">
              
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-6 mb-xxs-25 mb-xs-25 mb-sm-25">
                  {/*=======  big image slider  =======*/}
                  <div className="big-image-slider-wrapper">
                    
                    <Slider {...fsettings}>
                      {
                        sliderData.map((url, index) => {
                          return(
                            <div key={index} className="big-image-slider-single-item">
                            <img
                              width={600}
                              height={600}
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
                  {/*=======  End of big image slider  =======*/}
                  {/*=======  small image slider  =======*/}
                  <div className="small-image-slider-wrapper small-image-slider-wrapper--quickview">
                    <Slider {...ssettings}> 
                      {
                        sliderData.map((url, index) => {
                          return(
                            <div key={index} className="small-image-slider-single-item">
                            <img
                              width={600}
                              height={600}
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
                  {/*=======  End of small image slider  =======*/}
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6">
                  {/*=======  product detail content  =======*/}
                  <div className="product-detail-content">
                    <div className="tags mb-5">
                      <span className="tag-title">Tags:</span>
                      <ul className="tag-list">
                        <li>
                          <a href="#">Ulug' Mebel</a>,
                        </li>
                        <li>
                          <a href="#">Мебель</a>
                        </li>
                      </ul>
                    </div>
                    <h3 style={{whiteSpace: "pre-line"}} className="product-details-title mb-15">
                      {data.title}
                    </h3>
                    <div className="rating">
                      <i className="ion-android-star active" />
                      <i className="ion-android-star active" />
                      <i className="ion-android-star active" />
                      <i className="ion-android-star active" />
                      <i className="ion-android-star active" />
                    </div>
                    {/* <p className="product-price product-price--big mb-10">
                      <span className="discounted-price">${data.price}</span>{" "}
                      <span className="main-price discounted">${Math.round(data.price * (1 +(data.discount / 100)))}</span>
                    </p> */}
                    <div className="product-info-block mb-30">
                      <div className="single-info">
                        <span className="title">Комиссия:</span>
                        <span className="value">2.5%</span>
                      </div>
                      <div className="single-info">
                        <span className="title">Бренд:</span>
                        <span className="value">
                          <a href="#">Ulug' Mebel</a>
                        </span>
                      </div>
                      <div className="single-info">
                        <span className="title">Качество: </span>
                        <span className="value">Хорошее</span>
                      </div>
                      <div className="single-info">
                        <span className="title">Продукт:</span>
                        <span className="value stock-red">Есть</span>
                      </div>
                    </div>
                    <div className="product-short-desc mb-25">
                      <p style={{whiteSpace: "pre-line"}} >
                        {data.description}
                      </p>
                    </div>
                    {/* <div className="quantity mb-20">
                      <span className="quantity-title mr-20">Qty</span>
                      <div className="pro-qty mr-15 mb-lg-20 mb-md-20 mb-sm-20">
                        <input type="text" defaultValue={1} />
                      </div>
                      <button className="theme-button product-cart-button">
                        + Add to Cart
                      </button>
                    </div>
                    <div className="compare-button mb-15">
                      <a href="#">
                        <i className="icon-sliders" /> Compare This Product
                      </a>
                    </div>
                    <div className="wishlist-button">
                      <a href="#">
                        <i className="icon-heart" /> Add to Wishlist
                      </a>
                    </div> */}
                  </div>
                  {/*=======  End of product detail content  =======*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div> :  null}  
        
        </div> 
  )
} 

export default React.memo(MainWindowModal); 
