import React from 'react'; 
import {AiFillYoutube, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import {BsTelegram} from 'react-icons/bs'; 
import {useNavigate} from 'react-router-dom'; 

 function Shop() {
   const navigateTo = useNavigate(); 
    return(
        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "black"}} >
           {/* <img src='assets/img/shop/soo.webp' style={{width: "100%", height: "100%"}} /> */}
           <div style={{padding: "300px 0",}} >
           <h2 style={{ color: "yellow", fontSize: "40px", marginBottom: "20px"}} >Скоро открытие нашего магазина...</h2>
           
           <div style={{width: "100%", display: "flex",  justifyContent: "center", flexDirection: "column", alignItems: "center"}} >
            <p style={{color: "yellow", fontSize: "30px"}} >Соцсети: </p>  
            <ul className="social-link-small">
                      <li>
                        <a onClick={(() => window.open('https://www.facebook.com/profile.php?id=100079066774035'))} >
                          <AiFillFacebook  className="ion-social-facebook" style={{color: "yellow", fontSize: "40px"}}/>
                        </a>
                      </li>
                      <li>
                        <a onClick={(() => window.open('https://t.me/UlugMebel'))} >
                          <BsTelegram className="ion-social-facebook" style={{color: "yellow", fontSize: "40px"}}/>
                        </a>
                      </li>
                      <li>
                        <a onClick={(() => window.open('https://www.instagram.com/ulug_mebel/'))}>
                          <AiFillInstagram className="ion-social-instagram-outline" style={{color: "yellow", fontSize: "40px"}}/>
                        </a>
                      </li>
                      <li>
                        <a onClick={(() => window.open('# '))} >
                          <AiFillYoutube className="ion-social-youtube" style={{color: "yellow", fontSize: "40px"}}/>
                        </a>
                      </li>
                    </ul>
            </div>  
            <h2 onClick={() => navigateTo("/")} style={{ color: "yellow", fontSize: "40px", marginTop: "20px", textAlign: "center", cursor: "pointer"}} >Вернутся на Главную</h2>
           </div>
       
        </div>
    )
} 

export default React.memo(Shop); 