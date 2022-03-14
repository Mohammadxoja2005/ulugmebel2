import React from 'react'
import { Header, Footer, Sidebar} from '../components/admin/commons'
import styles from "./cssForAdmin/overall.module.css"; 
import cx from 'classnames'
  
export default function Dashboard() {
  return (
    <> 
   <Header />
    <div className={cx(styles["page-body"])}>
      <Sidebar />
      <div className={cx(styles["page-content-wrapper"])}>
        <div className={cx(styles["page-content-wrapper-inner"])}>
        <div className={cx(styles["viewport-header"])}>
            <nav aria-label="breadcrumb">
              <ol className={cx(styles["breadcrumb has-arrow"])}>
                <li className={cx(styles["breadcrumb-item"])}>
                  <a href="#">Dashboard Page</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        write code here... 
        <Footer/>  
      </div>
    </div>
    </>
  )
}


