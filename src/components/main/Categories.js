import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

function Categories() {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,  
    arrows: false,  

    responsive:[
       {
        breakpoint: 1501,  
        settings: {
            slidesToShow: 3,
        }
      }, 
      {
        breakpoint: 1199,  
        settings: {
            slidesToShow: 3,
        }
      },  
      {
        breakpoint: 991,  
        settings: {
            slidesToShow: 2,
        }
      },  
      {
        breakpoint: 767,  
        settings: {
            slidesToShow: 2, 
            arrows: false, 
        }
      }, 
      {
        breakpoint: 575,  
        settings: {
            slidesToShow: 2, 
            arrows: false, 
        }
      }, 
      {
        breakpoint: 479,  
        settings: {
            slidesToShow: 1, 
            arrows: false, 
        }
      },
    ]
  } 

  const fakeData = [
    {
      title: "Стулья", 
      imgUrl: "assets/img/category/stu1.png", 
      tag:["Обеденный ", "Кресло-качалка", "Вращающийся "], 
    },
    {
      title: "Диваны", 
      imgUrl: "assets/img/category/div2.png", 
      tag:["Раскладной ", "Выдвижной  ", "Раздвижной  "], 
    }, 
    {
      title: "Тумбочки", 
      imgUrl: "assets/img/category/tum1.png", 
      tag:["Прикроватные", "Навесные", "Напольные"], 
    }
  ]

  return (
    <div className="category-area mb-40">
  <div className="container">
    {/*=======  section title  =======*/}
    <div className="section-title mb-20">
      <h2>Избранные категории</h2>
    </div>
    {/*=======  End of section title  =======*/}
    <div className="row">
      <div className="col-lg-12">
        {/*=======  category slider wrapper  =======*/}
        <div className="category-slider-wrapper-two">
          <Slider {...settings}>
          {
            fakeData.map((value, index) => {
                return(
                  <div key={index} className="single-category-item-wrapper">
                  <div className="single-category-item">
                    <div className="single-category-item__image">
                      <a>
                        <img
                          width={150}
                          height={150}
                          src={value.imgUrl}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="single-category-item__content">
                      <h3 className="category-item-title">
                        <a>{value.title}</a>
                      </h3>
                      <ul className="category-list-item">
                        {
                           value.tag.map((e, index) => {
                            return(
                              <li key={index}>
                              <a>{e}</a>
                            </li>
                            )
                          })
                        }
                      </ul>
                      <a className="category-link">
                        <Link to="/shop">
                        Купить сейчас
                        </Link>
                      </a>
                    </div>
                  </div>
                </div> 
                )
            })
          }

          </Slider>
        </div>
        {/*=======  End of category slider wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
} 

export default React.memo(Categories); 
