import React, {useEffect}from 'react'
import {Link} from 'react-router-dom'; 

function Nav() { 

  useEffect(() =>{
    const a = document.querySelectorAll('.menu-item-has-children > a'); 
    const li = document.querySelectorAll('.menu-item-has-children'); 

    a.forEach((value) => {
      value.style.fontSize = "18px";
    })

    
    li.forEach((value) => {
      value.addEventListener("click", () => { 
        value.classList.add("active"); 
      })
    })

  },[]) 

  return (
    <nav>
    <ul>
      <li className="menu-item-has-children">
        <Link to="/">Главное</Link>
        {/* <ul className="sub-menu">
          <li>
            <Link href="index.html">Home Shop 1</Link>
          </li>
          <li>
            <Link href="index-2.html">Home Shop 2</Link>
          </li>
          <li>
            <Link href="index-3.html">Home Shop 3</Link>
          </li>
          <li>
            <Link href="index-4.html">Home Shop 4</Link>
          </li>
          <li>
            <Link href="index-5.html">Home Shop 5</Link>
          </li>
          <li>
            <Link href="index-6.html">Home Shop 6</Link>
          </li>
        </ul> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/about">О нас</Link>
        {/* <ul className="sub-menu">
          <li className="menu-item-has-children">
            <Link href="#">Page List One</Link>
            <ul className="sub-menu">
              <li>
                <Link href="cart.html">Cart</Link>
              </li>
              <li>
                <Link href="checkout.html">Checkout</Link>
              </li>
              <li>
                <Link href="wishlist.html">Wishlist</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="#">page list two</Link>
            <ul className="sub-menu">
              <li>
                <Link href="my-account.html">My Account</Link>
              </li>
              <li>
                <Link href="login-register.html">
                  Login Register
                </Link>
              </li>
              <li>
                <Link href="faq.html">FAQ</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="#">Page list three</Link>
            <ul className="sub-menu">
              <li>
                <Link href="compare.html">Compare</Link>
              </li>
              <li>
                <Link href="contact.html">Contact</Link>
              </li>
              <li>
                <Link href="about.html">About Us</Link>
              </li>
            </ul>
          </li>
        </ul> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/shop">Магазин </Link>
        {/* <ul className="mega-menu four-column">
          <li>
            <Link href="#">Shop Grid</Link>
            <ul>
              <li>
                <Link href="shop-3-column.html">shop 3 column</Link>
              </li>
              <li>
                <Link href="shop-4-column.html">shop 4 column</Link>
              </li>
              <li>
                <Link href="shop-left-sidebar.html">
                  shop left sidebar
                </Link>
              </li>
              <li>
                <Link href="shop-right-sidebar.html">
                  shop right sidebar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="shop-list-left-sidebar.html">
              Shop List
            </Link>
            <ul>
              <li>
                <Link href="shop-list.html">shop List</Link>
              </li>
              <li>
                <Link href="shop-list-left-sidebar.html">
                  shop List Left Sidebar
                </Link>
              </li>
              <li>
                <Link href="shop-list-right-sidebar.html">
                  shop List Right Sidebar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="single-product.html">Single Product</Link>
            <ul>
              <li>
                <Link href="single-product.html">
                  Single Product
                </Link>
              </li>
              <li>
                <Link href="single-product-variable.html">
                  Single Product variable
                </Link>
              </li>
              <li>
                <Link href="single-product-affiliate.html">
                  Single Product affiliate
                </Link>
              </li>
              <li>
                <Link href="single-product-group.html">
                  Single Product group
                </Link>
              </li>
              <li>
                <Link href="single-product-tabstyle-2.html">
                  Tab Style 2
                </Link>
              </li>
              <li>
                <Link href="single-product-tabstyle-3.html">
                  Tab Style 3
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="single-product.html">Single Product</Link>
            <ul>
              <li>
                <Link href="single-product-gallery-left.html">
                  Gallery Left
                </Link>
              </li>
              <li>
                <Link href="single-product-gallery-right.html">
                  Gallery Right
                </Link>
              </li>
              <li>
                <Link href="single-product-sticky-left.html">
                  Sticky Left
                </Link>
              </li>
              <li>
                <Link href="single-product-sticky-right.html">
                  Sticky Right
                </Link>
              </li>
              <li>
                <Link href="single-product-slider-box.html">
                  Slider Box
                </Link>
              </li>
            </ul>
          </li>
          <li className="megamenu-banner d-none d-lg-block mt-30 w-100">
            <Link href="shop-left-sidebar.html" className="mb-0">
              <img
                width={1049}
                height={180}
                src="assets/img/banners/img-bottom-menu.webp"
                className="img-fluid"
                alt=""
              />
            </Link>
          </li>
        </ul> */}
      </li>
      {/* <li className="menu-item-has-children">
        <Link to="/contact">Contact</Link>
        <ul className="sub-menu">
          <li>
            <Link href="blog-left-sidebar.html">
              Blog Left Sidebar
            </Link>
          </li>
          <li>
            <Link href="blog-right-sidebar.html">
              Blog Right Sidebar
            </Link>
          </li>
          <li>
            <Link href="blog-post-left-sidebar.html">
              Blog Post Left Sidebar
            </Link>
          </li>
          <li>
            <Link href="blog-post-right-sidebar.html">
              Blog Post Right Sidebar
            </Link>
          </li>
          <li>
            <Link href="blog-post-image-format.html">
              Blog Post Image Format
            </Link>
          </li>
          <li>
            <Link href="blog-post-image-gallery.html">
              Blog Post Image Gallery
            </Link>
          </li>
          <li>
            <Link href="blog-post-audio-format.html">
              Blog Post Audio Format
            </Link>
          </li>
          <li>
            <Link href="blog-post-video-format.html">
              Blog Post Video Format
            </Link>
          </li>
        </ul>
      </li> */}
      <li className='menu-item-has-children'>
        <Link to="/contact">Контакты</Link>
      </li>
    </ul>
  </nav>
  )
} 

export default React.memo(Nav); 
