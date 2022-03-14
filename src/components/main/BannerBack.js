import React from 'react'
import {Link} from 'react-router-dom'; 

 function BannerBack() {
  return (
    <div className="full-banner-background-area mb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/*=======  full banner wrapper  =======*/}
        <div className="full-banner-bg-wrapper banner-bg-1">
          <div className="full-banner-bg-wrapper__content">
            <h3>Надёжность</h3>
            <h4>Высокое качество</h4>
            <p style={{color:"grey"}}>
              Эти два слова полностью олицетворяют всю продукции <b style={{color:"black"}}>ULUG' MEBEL</b>!
            </p>
            <Link to="/shop"
              href="shop-left-sidebar.html"
              className="theme-button banner-bg-button"
            >
              Обозреть сейчас
            </Link>
          </div>
        </div>
        {/*=======  End of full banner wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
} 

export default React.memo(BannerBack);
