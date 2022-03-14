import React from 'react'

function ContactData() {
  return (
    <div className="contact-form-content">
    <h3 className="contact-page-title">Напишите нам </h3>
    <div className="contact-form">
      <form id="contact-form" action="assets/php/mail.php" method="post">
        <div className="form-group">
          <label>
            Ваше Имя <span className="required">*</span>
          </label>
          <input type="text" name="name" id="customername" required="" />
        </div>
        <div className="form-group">
          <label>
            Ваш Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="customerEmail"
            required=""
          />
        </div>
        {/* <div className="form-group">
          <label>Тема</label>
          <input type="text" name="subject" id="contactSubject" />
        </div> */}
        <div className="form-group">
          <label>Ваше Сообщение</label>
          <textarea
            name="message"
            id="contactMessage"
            defaultValue={""}
          />
        </div>
        <div className="form-group mb-0">
          <button
            type="submit"
            value="submit"
            id="submit"
            className="theme-button contact-button"
            name="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
    <p className="form-messege pt-10 pb-10 mt-10 mb-10" />
  </div>
  )
} 

export default React.memo(ContactData); 
