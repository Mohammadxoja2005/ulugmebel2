import React from 'react'

function Subscribe() {
  return (
    <div className="newsletter-area mb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/*=======  newsletter wrapper  =======*/}
        <div className="newsletter-wrapper newsletter-bg-3">
          <div className="newsletter-wrapper__text">
            <h3 style={{color:"black"}}>Подпишитесь на рассылку</h3>
            <p style={{color:"black"}}> Чтобы получать обновления.</p>
          </div>
          <div className="newsletter-wrapper__form">
            <form id="mc-form" className="mc-form">
              <input
                type="email"
                placeholder="Ведите ваш email адрес сюда ..."
              />
              <button type="submit">Отправить</button>
            </form>
            {/* mailchimp-alerts Start */}
            <div className="mailchimp-alerts mt-5 mb-5">
              <div className="mailchimp-submitting" />
              {/* mailchimp-submitting end */}
              <div className="mailchimp-success" />
              {/* mailchimp-success end */}
              <div className="mailchimp-error" />
              {/* mailchimp-error end */}
            </div>
            {/* mailchimp-alerts end */}
          </div>
        </div>
        {/*=======  End of newsletter wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
} 


export default React.memo(Subscribe); 
