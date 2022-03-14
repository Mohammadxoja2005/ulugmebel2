import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import { Social, Nav, MobileMenu} from '../generalElementForMainPageAndOtherSituations';

function FirstHead() {
  const [prev, setPrev] = useState({user: false, language: false, currency: false}); 
  const windowRef = useRef();   
  
  useEffect(() => { 
    const headerArea = document.querySelector('.header-sticky--absolute'); 
    const meanMenu = document.querySelector('.meanmenu-reveal'); 
    const menuNav = document.querySelector('.mean-nav'); 
    const mobileMenu = document.querySelector('.mobile-menu'); 
    const menu = document.querySelector("#menu"); 

    meanMenu.addEventListener('click', () => { 
      meanMenu.classList.add('meanclose'); 
      menuNav.classList.toggle("active-user");  
      mobileMenu.classList.add('animate__pulse'); 
    })

    window.onscroll = function(){
      if(window.pageYOffset > menu.offsetTop) {
          headerArea.classList.add('is-sticky--absolute'); 
      }else {
          headerArea.classList.remove('is-sticky--absolute');
      }
    }

    // window.addEventListener('scroll', () => {
    //     if(window.scrollY > 0) {
    //       headerArea.classList.add('is-sticky--absolute'); 
    //     }else {
    //       headerArea.classList.remove('is-sticky--absolute');
    //     }
    // })  

  document.addEventListener('mousedown', async (event) => { 
    if(!windowRef.current.contains(event.target)) {
      setPrev({user: false, language: false, currency: false});         
    }
  })

  }, [])

  return (
    <div className="header-area header-area--absolute header-sticky--absolute">

    <div className="navigation-top">
      {/*====================  navigation section ====================*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navigation-top-topbar pt-10 pb-10">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 text-center text-md-start">
                  <div className="header-top-social-Links">
                    <span className="follow-text mr-15" style={{color: "black"}}>Подпишитесь:</span>
                    <Social /> 
                  </div>
                </div>
                {/* <div className="col-lg-4 offset-lg-4 col-md-6">
                  <div className="headertop-dropdown-container justify-content-center justify-content-md-end">
                    <div className="header-top-single-dropdown">
                      <Link
                        href="javascript:void(0)"
                        className="active-dropdown-trigger"
                        id="user-options"
                        onClick={(() => {setPrev({user: !prev.user, language: false, currency: false})})}
                        >
                        My Account <i className="ion-ios-arrow-down" />
                      </Link>
                      
                      {prev.user ? <div className="header-top-single-dropdown__dropdown-menu-items active-dropdown-menu extra-small-mobile-fix user-flex">
                        <ul ref={windowRef}>
                          <li>
                            <Link href="login-register.html">Register</Link>
                          </li>
                          <li>
                            <Link href="login-register.html">Login</Link>
                          </li>
                        </ul>
                      </div> : null }
                      
                    </div>
                    <span className="separator">|</span>
                    <div className="header-top-single-dropdown">
                      <Link
                        href="javascript:void(0)"
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
                          <Link href="#">
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
                          <Link href="#">
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
                        href="javascript:void(0)"
                        className="active-dropdown-trigger"
                        id="currency-options"
                        onClick={(() => {setPrev({user: false, language: false, currency: !prev.currency})})}
                      >
                        USD <i className="ion-ios-arrow-down" />
                      </Link>
                  {prev.currency ? <div className="header-top-single-dropdown__dropdown-menu-items active-dropdown-menu currency-flex">
                      <ul ref={windowRef}>
                        <li>
                          <Link href="#">€ EURO</Link>
                        </li>
                        <li>
                          <Link href="#">£ Pound Sterling</Link>
                        </li>
                        <li>
                          <Link href="#">$ US Dollar</Link>
                        </li>
                      </ul>
                    </div> : null}  
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id='menu'>
        <div className="row">
          <div className="col-lg-12">
            {/*====================  navigation top search ====================*/}
            <div className="navigation-top-search-area mt-md-15 mt-sm-15">
              <div className="row align-items-center justify-content-between">
                {/* <div className="col-6 col-xl-2 col-lg-auto order-1 col-md-6">
                  <div className="logo">
                    <Link to="/">
                      <img
                        width={105}
                        height={40}
                        src="assets/img/logo/LOGO789.webp"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                </div> */}
                <div className="col-12 col-xl-7 col-lg-auto order-3 order-lg-2">
                  {/* navigation section */}
                  <div className="main-menu main-menu--separate d-none d-lg-block">
                   <Nav />
                  </div>
                  
                  {/* end of navigation section */}
                  {/* Mobile Menu */}
                  <div className="mobile-menu-wrapper d-block d-lg-none">
                    <div className="mobile-menu" />
                  </div>
                </div>

                {/* this is mobile menu */}

                <div className="mobile-menu-wrapper d-block d-lg-none order-3">
                    <div className="mobile-menu">
                         <div className="mean-bar" style={{height: "41px", marginTop: "16px"}}>
    <Link to="#" className="meanmenu-reveal">
        <span className="mean-menu-text" style={{top: "-12px"}}>
          {/* <i className="lnr lnr-text-align-left" /> Меню */}
                <img
                        width={80}
                        height={40}
                        src="assets/img/logo/LOGO789.webp"
                        className="img-fluid"
                        alt=""
                      />
        </span>{" "}
      <span className="menu-bar" />
    </Link> 
      <MobileMenu />
         </div>
        </div>
               </div>
              
                {/* this is end of mobile menu*/}
               {/* this is  shop and search side*/}
                <div className="col-6 col-xl-3 col-lg-auto text-end order-2">
                  {/* <div className="search-icon d-inline-block mr-40 mr-xxs-20">
                    <Link href="javascript:void(0)" id="search-overlay-trigger">
                      <i className="icon-search" />
                    </Link>
                  </div>
                  <div className="header-cart-icon d-inline-block">
                    <Link
                      href="javascript:void(0)"
                      id="small-cart-trigger"
                      className="small-cart-trigger"
                    >
                      <i className="icon-shopping-cart" />
                      <span className="cart-counter">2</span>
                    </Link>
                    <div className="small-cart deactive-dropdown-menu">
                      <div className="small-cart-item-wrapper">
                        <div className="single-item">
                          <div className="image">
                            <Link href="single-product.html">
                              <img
                                width={90}
                                height={90}
                                src="assets/img/cart-image/small3-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <p className="cart-name">
                              <Link href="single-product.html">Cillum dolore</Link>
                            </p>
                            <p className="cart-quantity">
                              <span className="quantity-mes">1 x</span> $78.80
                            </p>
                          </div>
                          <Link href="#" className="remove-icon">
                            <i className="ion-close-round" />
                          </Link>
                        </div>
                        <div className="single-item">
                          <div className="image">
                            <Link href="single-product.html">
                              <img
                                width={90}
                                height={90}
                                src="assets/img/cart-image/small4-90x90.webp"
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <p className="cart-name">
                              <Link href="single-product.html">
                                Condimentum posuere
                              </Link>
                            </p>
                            <p className="cart-quantity">
                              <span className="quantity-mes">1 x</span> $78.80
                            </p>
                          </div>
                          <Link href="#" className="remove-icon">
                            <i className="ion-close-round" />
                          </Link>
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
                          <Link href="cart.html" className="theme-button">
                            View Cart
                          </Link>
                          <Link href="checkout.html" className="theme-button">
                            Checkout
                          </Link>
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
   
  </div>
  )
} 

export default React.memo(FirstHead); 
