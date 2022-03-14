import React from 'react'
import ContactData from './ContactData'
import GoogleMap from './GoogleMap'

function Page() {

  const fakeData = {
      descripion: "", 
      address: "г. Ташкент, Сергелийский район, Ул. Безакчилик", 
      mobilePhone: "+998 (90) 016-84-84", 
      hotPhone: "",  
      email: "ulugmebeluz@gmail.com", 
  }

  return (
    <div className="page-section" >
  {/*=============================================
		=            google map container         =
		=============================================*/}
  <div onClick={() => window.open("https://www.google.com/maps/place/41%C2%B015'38.9%22N+69%C2%B015'09.7%22E/@41.2605445,69.2531714,17z/data=!4m5!3m4!1s0x0:0x75e145efbf3d8e9!8m2!3d41.260808!4d69.252697")} className="google-map-container mb-45" style={{width: '100%'}}>
    <div id="google-map" style={{backgroundImage: `url('assets/img/blog/maps.png')`,  cursor: "pointer"}} > 
      
    </div> 
  </div>
  {/*=====  End of google map container  ======*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-5 offset-lg-1 col-md-12 mb-sm-45 order-1 order-lg-2 mb-md-45">
        {/*=======  contact page side content  =======*/}
        <div className="contact-page-side-content">
          <h3 className="contact-page-title">Связаться с нами</h3>
          <p className="contact-page-message mb-30" style={{whiteSpace: "pre-line"}}>
            {fakeData.description}
          </p>
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-fax" /> Адрес
            </h4>
            <p>{fakeData.address}</p>
          </div>
          {/*=======  End of single contact block  =======*/}
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-phone" /> Телефон:
            </h4>
            <p>Мобильный: {fakeData.mobilePhone}</p>
            {/* <p>Hotline: {fakeData.hotPhone}</p> */}
          </div>
          {/*=======  End of single contact block  =======*/}
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-envelope-o" /> Email
            </h4>
            <p>{fakeData.email}</p>
            {/* <p>support@hastech.company</p> */}
          </div>
          {/*=======  End of single contact block  =======*/}
        </div>
        {/*=======  End of contact page side content  =======*/}
      </div>
      <div className="col-lg-6 col-md-12 order-2 order-lg-1">
        {/*=======  contact form content  =======*/}
          <ContactData/>
        {/*=======  End of contact form content =======*/}
      </div>
    </div>
  </div>
</div>

  )
}

export default React.memo(Page); 