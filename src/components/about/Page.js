import React from 'react'

function Page() {

  const fakeData = [ 

  {
   imgUrl: "assets/img/icons/quadip.webp",
   title: "Качество ",
   description: "Весь ассортимент наших продуктов изготавливается из высококачественных материалов. Отвечающий всему комплексу технических требований.",
  },
  {
    imgUrl: "assets/img/icons/ico3.webp",
    title: "Дизайн",
    description: "Дизайн нашей продукции разрабатывается и проектируется исключительно нашими опытными дизайнерами, согласно  нуждам и требованиям наших клиентов.",
   },
   {
    imgUrl: "assets/img/icons/ico5.webp",
    title: "Производство",
    description: "Производством наших изделий занимаются профессионалы своего дела. Под чутким руководством мастеров с более чем 20 летним опытом работ.",
   } 

  ] 

  return (
    <div className="page-section pb-40" style={{marginTop: "20px"}}>
    <div className="container">
      <div className="row row-30">
        {/* About Image */}
        <div className="about-image col-lg-6 mb-50 mb-sm-30 mb-md-30">
          <img
            width={565}
            height={240}
            src="assets/img/logo/logo.webp"
            className="img-fluid"
            alt=""
          />
        </div>
        {/* About Content */}
        <div className="about-content col-lg-6">
          <div className="row">
            <div className="col-12 mb-50">
              <h1>
                Добро пожаловать на <span style={{color:"gold"}}>Ulug' Mebel</span>
              </h1>
              <p>
                ULUG' MEBEL основан в 2005 году. Наша мебель идёт в ногу со временем и
                 сочетает в себе качество и красоту, проверенная годами и нашими
                  довольными покупателями.
              </p>
            </div>
            <div className="col-12 mb-50">
              <h3>17 лет на рынке Узбекистана</h3>
              <p>
                Имея за спиной опыта работы на рынке более 17 лет мы успешно завершили
                 9 200 заказов по всей Республике. Более 1000 семей и сотни организаций
                  доверяют нам и нашему продукту. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>

      {/* <div className="row row-10 mb-40" style={{marginTop: "36px"}}>
        {fakeData.map((value, index) => {
          return(
           <div className="col-md-4 mb-sm-30">
          <div className="single-banner">
            <a href="#">
              <img
                width={250}
                height={60}
                src={value.imgUrl}
                className="img-fluid"
                alt="Banner"
              />
            </a>
          </div>
        </div> 
          )
        })
      }
        
 
      </div>  */}
      
      <div className="about-mission-vission-goal row row-20 mb-50 mb-md-20 mb-sm-20">
      {
        fakeData.map((value, index) => {
          return(
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-md-30 mb-sm-30">
          <h3>
            {value.title}
            </h3>
          <p style={{whiteSpace:"pre-line"}}>
          {value.description}
          </p>
        </div>
          ) 
        })
      }
        
      
      </div>
    
    </div>
       </div>
  )
} 

export default React.memo(Page); 
