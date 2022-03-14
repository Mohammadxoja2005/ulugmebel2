import React from 'react'
import {Link} from 'react-router-dom'; 

function MobileMenu() {
  return (
    <nav className="mean-nav">
    <ul>
      <li className="active menu-item-has-children">
        <Link to="/">Главное</Link>
        {/* <ul className="sub-menu" style={{ display: "none" }}>
          <li>
            <Link to="index.html">Home Shop 1</Link>
          </li>
          <li>
            <Link to="index-2.html">Home Shop 2</Link>
          </li>
          <li>
            <Link to="index-3.html">Home Shop 3</Link>
          </li>
          <li>
            <Link to="index-4.html">Home Shop 4</Link>
          </li>
          <li>
            <Link to="index-5.html">Home Shop 5</Link>
          </li>
          <li>
            <Link to="index-6.html">Home Shop 6</Link>
          </li>
        </ul>
        <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
          +
        </Link> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/about">О нас</Link>
        {/* <ul className="mega-menu four-column" style={{ display: "none" }}>
          <li>
            <Link to="#">Shop Grid</Link>
            <ul style={{ display: "none" }}>
              <li>
                <Link to="shop-3-column.html">shop 3 column</Link>
              </li>
              <li>
                <Link to="shop-4-column.html">shop 4 column</Link>
              </li>
              <li>
                <Link to="shop-left-sidebar.html">shop left sidebar</Link>
              </li>
              <li>
                <Link to="shop-right-sidebar.html">shop right sidebar</Link>
              </li>
            </ul>
            <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
              +
            </Link>
          </li>
          <li>
            <Link to="shop-list-left-sidebar.html">Shop List</Link>
            <ul style={{ display: "none" }}>
              <li>
                <Link to="shop-list.html">shop List</Link>
              </li>
              <li>
                <Link to="shop-list-left-sidebar.html">
                  shop List Left Sidebar
                </Link>
              </li>
              <li>
                <Link to="shop-list-right-sidebar.html">
                  shop List Right Sidebar
                </Link>
              </li>
            </ul>
            <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
              +
            </Link>
          </li>
          <li>
            <Link to="single-product.html">Single Product</Link>
            <ul style={{ display: "none" }}>
              <li>
                <Link to="single-product.html">Single Product</Link>
              </li>
              <li>
                <Link to="single-product-variable.html">
                  Single Product variable
                </Link>
              </li>
              <li>
                <Link to="single-product-affiliate.html">
                  Single Product affiliate
                </Link>
              </li>
              <li>
                <Link to="single-product-group.html">Single Product group</Link>
              </li>
              <li>
                <Link to="single-product-tabstyle-2.html">Tab Style 2</Link>
              </li>
              <li>
                <Link to="single-product-tabstyle-3.html">Tab Style 3</Link>
              </li>
            </ul>
            <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
              +
            </Link>
          </li>
          <li>
            <Link to="single-product.html">Single Product</Link>
            <ul style={{ display: "none" }}>
              <li>
                <Link to="single-product-gallery-left.html">Gallery Left</Link>
              </li>
              <li>
                <Link to="single-product-gallery-right.html">Gallery Right</Link>
              </li>
              <li>
                <Link to="single-product-sticky-left.html">Sticky Left</Link>
              </li>
              <li>
                <Link to="single-product-sticky-right.html">Sticky Right</Link>
              </li>
              <li>
                <Link to="single-product-slider-box.html">Slider Box</Link>
              </li>
            </ul>
            <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
              +
            </Link>
          </li>
          <li className="megamenu-banner d-none d-lg-block mt-30 w-100">
            <Link to="shop-left-sidebar.html" className="mb-0">
              <img
                width={1049}
                height={180}
                src="assets/img/banners/img-bottom-menu.webp"
                className="img-fluid"
                alt=""
              />
            </Link>
          </li>
        </ul>
        <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
          +
        </Link> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/shop">Магазин</Link>
        {/* <ul className="sub-menu" style={{ display: "none" }}>
          <li>
            <Link to="blog-left-sidebar.html">Blog Left Sidebar</Link>
          </li>
          <li>
            <Link to="blog-right-sidebar.html">Blog Right Sidebar</Link>
          </li>
          <li>
            <Link to="blog-post-left-sidebar.html">Blog Post Left Sidebar</Link>
         </li>
          <li>
            <Link to="blog-post-right-sidebar.html">Blog Post Right Sidebar</Link>
          </li>
          <li>
            <Link to="blog-post-image-format.html">Blog Post Image Format</Link>
          </li>
          <li>
            <Link to="blog-post-image-gallery.html">Blog Post Image Gallery</Link>
          </li>
          <li>
            <Link to="blog-post-audio-format.html">Blog Post Audio Format</Link>
          </li>
          <li>
            <Link to="blog-post-video-format.html">Blog Post Video Format</Link>
          </li>
        </ul>
        <Link className="mean-expand" to="#" style={{ fontSize: 0 }}>
          +
        </Link> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/contact">Контакты</Link>
      </li>
    </ul>
  </nav> 
  )
} 

export default React.memo(MobileMenu); 
