import React from 'react'; 
import {AiFillYoutube, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import {BsTelegram} from 'react-icons/bs'; 
import {Link} from "react-router-dom"; 

function FooterSocial() {
    return(
 <ul>
    <li>
      <a className="facebook-icon" href="https://www.facebook.com/profile.php?id=100079066774035">
        <AiFillFacebook className="ion-social-facebook" />
      </a>
    </li> 
    <li>
      <a className="twitter-icon" href="https://t.me/UlugMebel">
        <BsTelegram className="ion-social-twitter" />
      </a>
    </li> 
    <li>
      <a className="instagram-icon" href="https://www.instagram.com/ulug_mebel/">
        <AiFillInstagram className="ion-social-instagram-outline" />
      </a>
    </li>
    <li>
      {/* <a className="youtube-icon" href="//www.youtube.com">
        <AiFillYoutube className="ion-social-youtube" />
      </a> */}
         <Link className="youtube-icon" to="/shop">
             <AiFillYoutube className="ion-social-youtube" style={{color: "white"}}/>
          </Link>
    </li> 
  </ul> 
    )
} 

export default React.memo(FooterSocial); 