import React from 'react'; 
import Slider from 'react-slick'; 
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'; 

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

function BannerDouble() { 

  const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        rows: 2,
        prevArrow: <SamplePrevArrow />, 
        nextArrow: <SampleNextArrow />, 
        responsive:[ 
        {
            breakpoint: 1501, 
            settings: {
                slidesToShow: 3, 
            }
        }, 
        {
            breakpoint: 1199, 
            settings: {
                slidesToShow: 3, 
            }
        },  
        {
            breakpoint: 991, 
            settings: {
                slidesToShow: 2, 
            }
        },  
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 2,  
                arrows: false, 
            }
        }, 
        {
            breakpoint: 575, 
            settings: {
                slidesToShow: 2,  
                arrows: false, 
            }
        }, 
        {
            breakpoint: 479, 
            settings: {
                slidesToShow: 1,  
                arrows: false, 
            }
        },
     ]
  }  

  return (
    <div className="banner-double-row-slider-area mb-40">
   <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/*=======  section title  =======*/}
        <div className="section-title mb-20">
          <h2>Новая коллекция</h2>
        </div>
        {/*=======  End of section title  =======*/}
      </div>
    </div>
    <div className="row row-10">
      <div className="col-custom-5 mb-sm-30">
        {/*=======  slider banner area  =======*/}
        <div className="slider-banner">
          <a href="shop-left-sidebar.html">
            <img
            //   width={432}
            //   height={694}
              src="assets/img/banners/slider-banner2.webp"
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
        
      </div>
      <div className="col-custom-7">
        <div className="product-double-row-slider-wrapper">
          <Slider {...settings}> 
          {/* <div className="single-slider-product-wrapper" style={{width: "83%"}}>
              <div className="single-slider-product">
                <div className="single-slider-product__image">
                  <a href="single-product.html">
                    <img
                      width={600}
                      height={600}
                      src="assets/img/products/medium26.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <span className="discount-label discount-label--red">
                    -10%
                  </span>
                  <div className="hover-icons">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#quick-view-modal-container"
                          href="javascript:void(0)"
                        >
                          <i className="icon-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="icon-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="icon-sliders" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-slider-product__content">
                  <p className="product-title">
                    <a href="single-product.html">Cillum dolore furniture</a>
                  </p>
                  <div className="rating">
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star" />
                  </div>
                  <p className="product-price">
                    <span className="discounted-price">$50.00</span>{" "}
                    <span className="main-price discounted">$120.00</span>
                  </p>
                  <span className="cart-icon">
                    <a href="javascript:void(0)">
                      <i className="icon-shopping-cart" />
                    </a>
                  </span>
                </div>
              </div>
            </div> 
            <div className="single-slider-product-wrapper" style={{width: "83%"}}>
              <div className="single-slider-product">
                <div className="single-slider-product__image">
                  <a href="single-product.html">
                    <img
                      width={600}
                      height={600}
                      src="assets/img/products/medium26.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <span className="discount-label discount-label--red">
                    -10%
                  </span>
                  <div className="hover-icons">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#quick-view-modal-container"
                          href="javascript:void(0)"
                        >
                          <i className="icon-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="icon-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="icon-sliders" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-slider-product__content">
                  <p className="product-title">
                    <a href="single-product.html">Cillum dolore furniture</a>
                  </p>
                  <div className="rating">
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star active" />
                    <i className="ion-android-star" />
                  </div>
                  <p className="product-price">
                    <span className="discounted-price">$50.00</span>{" "}
                    <span className="main-price discounted">$120.00</span>
                  </p>
                  <span className="cart-icon">
                    <a href="javascript:void(0)">
                      <i className="icon-shopping-cart" />
                    </a>
                  </span>
                </div>
              </div>
            </div>  */}
          </Slider>
        </div>
        {/*=======  End of product double row slider wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
} 
export default React.memo(BannerDouble); 
