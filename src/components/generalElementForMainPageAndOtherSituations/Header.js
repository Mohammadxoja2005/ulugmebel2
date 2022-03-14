import React, {useEffect, useState, useRef} from 'react'
import { Social, Nav, MobileMenu} from './';
import {Link} from 'react-router-dom'

function Header() {
  const [prev, setPrev] = useState({user: false, language: false, currency: false}); 
  const windowRef = useRef();

  useEffect(() => { 
    const headerArea = document.querySelector('.header-sticky'); 
    
    const meanMenu = document.querySelector('.meanmenu-reveal'); 
    const menuNav = document.querySelector('.mean-nav'); 
    const mobileMenu = document.querySelector('.mobile-menu');   
    const menu = document.querySelector("#menu-area"); 

    meanMenu.addEventListener('click', () => { 
      meanMenu.classList.add('meanclose'); 
      menuNav.classList.toggle("active-user");  
      mobileMenu.classList.add('animate__pulse'); 
    }) 

    const a = document.querySelectorAll('.menu-item-has-children > a'); 
    
    a.forEach((value) => {
      value.style.fontSize = "18px"; 
    })

    window.onscroll = function(){
      if(window.pageYOffset > menu.offsetTop) {
        menu.classList.add('for-menu'); 
      }else {
        menu.classList.remove('for-menu');
      }
    }

    // window.addEventListener('scroll', () => {
    //     if(window.scrollY > 0) {
    //       headerArea.classList.add('is-sticky'); 
    //     }else {
    //       headerArea.classList.remove('is-sticky');
    //     }
    // })  

    document.addEventListener('mousedown', (event) => { 
      if(!windowRef.current.contains(event.target)) {
        setPrev({user: false, language: false, currency: false});         
      }
    })

  }, [])

  return (
  <div className="header-area header-sticky">
  {/*====================  Navigation top ====================*/}
  <div className="navigation-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*====================  navigation section ====================*/}
          <div className="navigation-top-topbar pt-10 pb-10">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 text-center text-md-start">
                {/*=======  header top social links  =======*/}
                <div className="header-top-social-links">
                  <span className="follow-text mr-15">Подпишитесь:</span>
                  {/*=======  social link small  =======*/}
                  <Social/>
                  {/*=======  End of social link small  =======*/}
                </div>
                {/*=======  End of header top social links  =======*/}
              </div>
              <div className="col-lg-4 offset-lg-4 col-md-6">

              {/* <div className="headertop-dropdown-container justify-content-center justify-content-md-end">
                    <div className="header-top-single-dropdown">
                      <Link
                        to="#"
                        className="active-dropdown-trigger"
                        id="user-options"
                        onClick={(() => {setPrev({user: !prev.user, language: false, currency: false})})}
                        >
                        My Account <i className="ion-ios-arrow-down" />
                      </Link>
                      
                      {prev.user ? <div className="header-top-single-dropdown__dropdown-menu-items active-dropdown-menu extra-small-mobile-fix user-flex">
                        <ul ref={windowRef}>
                          <li>
                            <Link to="#">Register</Link>
                          </li>
                          <li>
                            <Link to="#">Login</Link>
                          </li>
                        </ul>
                      </div> : null }
                      
                    </div>
                    <span className="separator">|</span>
                    <div className="header-top-single-dropdown">
                      <Link
                        to="#"
                        className="active-dropdown-trigger"
                        id="language-options"
                        onClick={(() => {setPrev({user: false, language: !prev.language, currency: false})})}
                      >
                        {" "}
                        <img
                          width={16}
                          height={11}
                          src="assets/img/icons/en-gb.webp"
                          alt=""
                        />
                        En-Gb <i className="ion-ios-arrow-down" />
                      </Link>
             {prev.language ? <div className="header-top-single-dropdown__dropdown-menu-items active-dropdown-menu language-flex">
                      <ul ref={windowRef}>
                        <li>
                          <Link to="#">
                            {" "}
                            <img
                              width={16}
                              height={11}
                              src="assets/img/icons/en-gb.webp"
                              alt=""
                            />
                            English{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <img
                              width={16}
                              height={11}
                              src="assets/img/icons/de-de.webp"
                              alt=""
                            />
                            Germany{" "}
                          </Link>
                        </li>
                      </ul>
                   </div> : null}
                    </div>
                    <span className="separator">|</span>
                    <div className="header-top-single-dropdown">
                      <Link
                        to="#"
                        className="active-dropdown-trigger"
                        id="currency-options"
                        onClick={(() => {setPrev({user: false, language: false, currency: !prev.currency})})}
                      >
                        USD <i className="ion-ios-arrow-down" />
                      </Link>
                  {prev.currency ? <div className="header-top-single-dropdown__dropdown-menu-items active-dropdown-menu currency-flex">
                      <ul ref={windowRef}>
                        <li>
                          <Link to="#">€ EURO</Link>
                        </li>
                        <li>
                          <Link to="#">£ Pound Sterling</Link>
                        </li>
                        <li>
                          <Link to="#">$ US Dollar</Link>
                        </li>
                      </ul>
                    </div> : null}  
                    </div>
                  </div> */}
                
              </div>
            </div>
          </div>
          {/*====================  End of navigation section  ====================*/}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/*====================  navigation top search ====================*/}
          <div className="navigation-top-search-area pt-15 pb-20">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2 col-lg-3 order-1 col-md-6 col-sm-5 logo_proto">
                {/*=======  logo  =======*/}
                <div className="logo">
                  <Link to="/">
                    <img
                      style={{width: "105px"}}
                      src="assets/img/logo/LOGO789.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of logo  =======*/}
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-4 order-4 order-lg-2 mt-md-25 mt-sm-25">
                {/*=======  search bar  =======*/}
                <div className="search-bar">
                  <form action="#">
                    <input
                      type="search"
                      placeholder="Искать то, что вы хотите ..."
                    />
                    <button type="submit">
                      {" "}
                      <i className="icon-search" />
                    </button>
                  </form>
                </div>
                {/*=======  End of search bar  =======*/}
              </div>
              <div className="col-xl-3 col-lg-3 order-3 order-sm-2 order-lg-3 order-xs-3 col-md-4 col-sm-5 text-center text-sm-start mt-xs-25">
                {/*=======  customer support text  =======*/}
                <div className="customer-support-text">
                  <div className="icon">
                    <img
                      width={39}
                      height={35}
                      src="assets/img/icons/icon-header-phone.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <span>Служба поддержки</span>
                    <p>+998 (90) 016-84-84</p>
                  </div>
                </div>
                {/*=======  End of customer support text  =======*/}
              </div>
              <div className="col-6 col-xl-1 col-lg-2 text-end order-2 order-sm-3 order-lg-4 order-xs-2 col-md-2 col-sm-2">
                {/*=======  cart icon  =======*/}
                {/* <div className="header-cart-icon">
                  <a
                    href="javascript:void(0)"
                    id="small-cart-trigger"
                    className="small-cart-trigger"
                  >
                    <i className="icon-shopping-cart" />
                    <span className="cart-counter">2</span>
                  </a>
         
                  <div className="small-cart deactive-dropdown-menu">
                    <div className="small-cart-item-wrapper">
                      <div className="single-item">
                        <div className="image">
                          <a href="single-product.html">
                            <img
                              width={90}
                              height={90}
                              src="assets/img/cart-image/small1-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content">
                          <p className="cart-name">
                            <a href="single-product.html">Cillum dolore</a>
                          </p>
                          <p className="cart-quantity">
                            <span className="quantity-mes">1 x </span>
                            $78.80
                          </p>
                        </div>
                        <a href="#" className="remove-icon">
                          <i className="ion-close-round" />
                        </a>
                      </div>
                      <div className="single-item">
                        <div className="image">
                          <a href="single-product.html">
                            <img
                              width={90}
                              height={90}
                              src="assets/img/cart-image/small2-90x90.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content">
                          <p className="cart-name">
                            <a href="single-product.html">
                              Condimentum posuere
                            </a>
                          </p>
                          <p className="cart-quantity">
                            <span className="quantity-mes">1 x </span>
                            $78.80
                          </p>
                        </div>
                        <a href="#" className="remove-icon">
                          <i className="ion-close-round" />
                        </a>
                      </div>
                    </div>
                    <div className="cart-calculation-table">
                      <table className="table mb-25">
                        <tbody>
                          <tr>
                            <td className="text-start">Sub-Total :</td>
                            <td className="text-end">$129.00</td>
                          </tr>
                          <tr>
                            <td className="text-start">Eco Tax (-2.00) :</td>
                            <td className="text-end">$4.00</td>
                          </tr>
                          <tr>
                            <td className="text-start">VAT (20%) :</td>
                            <td className="text-end">$25.80</td>
                          </tr>
                          <tr>
                            <td className="text-start">Total :</td>
                            <td className="text-end">$158.80</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart-buttons">
                        <a href="cart.html" className="theme-button">
                          View Cart
                        </a>
                        <a href="checkout.html" className="theme-button">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
      
                </div> */}
      
              </div>
            </div>
          </div>
          {/*====================  End of navigation top search  ====================*/}
        </div>
      </div>
    </div>
  </div>
  
  <div className="navigation-menu-area" id='menu-area'>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-menu d-none d-lg-block">
           <Nav/>
          </div>



          <div className="mobile-menu-wrapper d-block d-lg-none order-3 pt-15">
                    <div className="mobile-menu">
                         <div className="mean-bar">
    <Link to="#" className="meanmenu-reveal">
        <span className="mean-menu-text">
          <i className="lnr lnr-text-align-left" /> Меню
        </span>{" "}
      <span className="menu-bar" />
    </Link>
       <MobileMenu />
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

export default React.memo(Header); 
