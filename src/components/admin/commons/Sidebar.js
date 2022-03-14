import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineDashboard} from 'react-icons/ai'; 
import {MdContactPage} from 'react-icons/md'; 
import styles from "../../../adminPages/cssForAdmin/overall.module.css"; 
import cx from 'classnames'; 

const ULMAIN = (props) => {
  const {} = props; 
  return (
    <ul className={cx(styles["navigation-submenu"])} id='sample-pages'>
    <li>
      <Link to="/admin" target='_blank'>
        Header
      </Link>
      
    </li>
    <li>
      <Link to="/admin" target='_blank'>
        Banner
      </Link>
    </li>
  </ul>
  )
}

function Sidebar() { 
  const [show, setShow] = useState(false); 
  return (
    <>
      <div className={cx(styles["sidebar"])}>
        {/* <div className={cx(styles["user-profile'>
          <div className={cx(styles["display-avatar animated-avatar'>
            <img
              className={cx(styles["profile-img img-lg rounded-circle'
              src='../assets/images/profile/male/image_1.png'
              alt='profile image'
            />
          </div>
          <div className={cx(styles["info-wrapper'>
            <p className={cx(styles["user-name'>Allen Clerk</p>
            <h6 className={cx(styles["display-income'>$3,400,00</h6>
          </div>
        </div> */}
        <ul className={cx(styles["navigation-menu"])}>
          <li className={cx(styles["nav-category-divider"])} style={{fontWeight: 'bold', color: "black"}}>MAIN</li>
          <li>
            <Link to='/admin'>
              <span className={cx(styles["link-title"])}>Dashboard</span>
              <AiOutlineDashboard className={cx(styles["link-icon"])}/>
              {/* <i className={cx(styles["mdi mdi-gauge link-icon' /> */}
            </Link>
          </li>
          <li>
            <Link
              to="/admin/main"
              style={{ position: "relative" }}
              className={cx(styles["btn-product"])}
              aria-expanded='false'
              onClick={() => setShow(!show)} 
              >
              <span
                className={cx(styles["icon"])}
                style={{ position: "absolute", right: "33px" }}>
              </span>
              <span className={cx(styles["link-title"])}>Main Page</span>
              <MdContactPage className={cx(styles["link-icon"])}/>
              {/* <i className={cx(styles["mdi mdi-flask link-icon' /> */}
            </Link>
            {show ? <ULMAIN/> : null}
            {/* <ul className={cx(styles["navigation-submenu"])} id='sample-pages'>
              <li>
                <Link to="/admin" target='_blank'>
                  Header
                </Link>
                
              </li>
              <li>
                <Link to="/admin" target='_blank'>
                  Banner
                </Link>
              </li>
            </ul> */}
          </li>
          <li>
            <ul className={cx(styles["collapse"], styles["navigation-submenu"])} id='ui-elements'>
              <li>
                <a href='pages/ui-components/buttons.html'>Buttons</a>
              </li>
              <li>
                <a href='pages/ui-components/tables.html'>Tables</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}


export default Sidebar; 