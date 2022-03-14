import React from 'react'
import {Link} from 'react-router-dom'; 
import {AiFillYoutube, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import {BsTelegram} from 'react-icons/bs'; 

function Social() {
  return (
    <ul className="social-link-small">
                      <li>
                        <a onClick={(() => window.open('https://www.facebook.com/profile.php?id=100079066774035'))} >
                          <AiFillFacebook className="ion-social-facebook" style={{color: "black"}}/>
                        </a>
                      </li>
                      <li>
                        <a onClick={(() => window.open('https://t.me/UlugMebel'))} >
                          <BsTelegram className="ion-social-facebook" style={{color: "black"}}/>
                        </a>
                      </li>
                      <li>
                        <a onClick={(() => window.open('https://www.instagram.com/ulug_mebel/'))}>
                          <AiFillInstagram className="ion-social-instagram-outline" style={{color: "black"}}/>
                        </a>
                      </li>
                      <li>
                        {/* <a onClick={(() => window.open(''))} >
                          <AiFillYoutube className="ion-social-youtube" style={{color: "black"}}/>
                        </a> */} 
                        <Link to="/shop">
                        <AiFillYoutube className="ion-social-youtube" style={{color: "black"}}/>
                        </Link>
                      </li>
                    </ul>
  )
} 

export default React.memo(Social); 
