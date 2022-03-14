import React from 'react'
import Slider from 'react-slick'; 
import {Link} from 'react-router-dom';
import {Instagram} from './';


function Footer() {
  return ( 
 <div className="footer-area">
   <div className="container">
     <div className="row mb-40">
       <div className="col-lg-12">
         <div className="footer-content-wrapper border-top pt-40">
           <div className="row">
             <div className="col-lg-4 col-md-6">
              {/*=======  single footer widget  =======*/}
              <div className="single-footer-widget">
                <div className="footer-logo mb-25">
                  <img
                    style={{width: "105px"}}
                    height={40}
                    src="assets/img/logo/LOGO789.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="footer-text-block mb-10">
                  <h5 className="footer-text-block__title">Адрес</h5>
                  <p className="footer-text-block__content">
                  г. Ташкент, Сергелийский район, Ул. Безакчилик
                  </p>
                </div>
                <div className="footer-text-block mb-10">
                  <h5 className="footer-text-block__title">Нужна помощь?</h5>
                  <p className="footer-text-block__content">
                  Звоните: +998 (90) 016-84-84
                  </p>
                </div>
                <div className="footer-social-icon-block">
                 
                </div>
              </div>
              {/*=======  End of single footer widget  =======*/}
            </div>
              {/*=======  single footer widget  =======*/}
              <div className="col-lg-4 col-md-6 mt-sm-30">
  {/*=======  single footer widget  =======*/}
  <div className="single-footer-widget">
    <h4 className="footer-widget-title">
      <a href="#">Подпишитесь на Инстаграм</a>
    </h4>
    <div className="instagram-image-slider-wrapper">
      <Instagram />
    </div>
  </div>
  {/*=======  End of single footer widget  =======*/}
</div>

              {/*=======  End of single footer widget  =======*/}
            <div className="col-lg-4 col-md-6 mt-md-30 mt-sm-30">
              {/*=======  single footer widget  =======*/}
              <div className="single-footer-widget">
                <h5 className="montserrat-footer-widget-title">Информация</h5>
                <div className="footer-navigation">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/about">О нас</Link>
                      </li>
                      {/* <li>
                        <a href="#">Privacy Policy</a>
                      </li> */}
                      <li>
                        <Link to="/contact">Связаться с нами</Link>
                      </li>
                      {/* <li>
                        <a href="#">Gift Certificates</a>
                      </li> */}
                      {/* <li>
                        <a href="#">Specials</a>
                      </li> */}
                      <li>
                        <Link to="/about">Информация о доставке</Link>
                      </li>
                      {/* <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li> */}
                      <li>
                        <Link to="/">Бренд</Link>
                      </li>
                      {/* <li>
                        <a href="#">Affiliate</a>
                      </li> */}
                      {/* <li>
                        <a href="#">Карта сайта</a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
              {/*=======  End of single footer widget  =======*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="copyright-text-area">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-sm-15">
              <div className="copyright-text">
                <p>
                  Copyright © 2021 <a href="#">Ulug Mebel</a>. All Right Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="payment-logo">
                <img
                  width={286}
                  height={23}
                  src="assets/img/icons/payment.webp"
                  className="img-fluid"
                  alt=""
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
  )
} 

export default React.memo(Footer); 
