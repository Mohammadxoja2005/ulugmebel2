import React from 'react'
import styles from "../../../adminPages/cssForAdmin/overall.module.css"; 
import cx from "classnames";  

function Footer() {
  return (
    <footer className={cx(styles["footer"])}>
    <div className={cx(styles["row"])}>
      <div className={cx(styles["col-sm-6"], styles["text-center"],styles["text-sm-right"], styles["order-sm-1"])}>
        <ul className={cx(styles["text-gray"])}>
          <li>
            <a href='#'>Terms of use</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className={cx(styles["col-sm-6"],styles["text-center"], styles["text-sm-left"], styles["mt-3"], styles["mt-sm-0"])}>
        <small className={cx(styles["text-mute"], styles["d-block"])}>
          Copyright © 2019{" "}
          <a href='http://www.uxcandy.co' target='_blank'>
            UXCANDY
          </a>
          . All rights reserved
        </small>
        <small className={cx(styles["text-gray"], styles["mt-2"])}>
          Handcrafted With <i className={cx(styles["mdi"],  styles["mdi-heart"], styles["text-danger"])} />
        </small>
      </div>
    </div>
  </footer>
  )
} 

export default React.memo(Footer); 
