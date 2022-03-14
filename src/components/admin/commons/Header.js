import React from "react";
import {GrFormNextLink} from 'react-icons/gr'
import {BiMessageDetail} from 'react-icons/bi';
import {AiOutlineBell} from 'react-icons/ai'; 
import {MdOutlineApps} from 'react-icons/md'; 
import {IconContext} from 'react-icons';  
import styles from "../../../adminPages/cssForAdmin/overall.module.css"; 
import cx from "classnames"; 

function Header() {
  return (
    <nav className={styles["t-header"]}>
      <div className={styles["t-header-brand-wrapper"]}>
        <a href='/'>
          <img className={styles["logo"]} src='/images/logo.svg' />
        </a>
      </div>
      <div className={styles["t-header-content-wrapper"]}>
        <div className={styles["t-header-content"]}>
          <button className={cx(styles["t-header-toggler"], styles["t-header-mobile-toggler"], styles["d-block"], styles["d-lg-none"])}>
            <i className={cx(styles["mdi"], styles["mdi-menu"])}/>
          </button>
          <form action='#' className={styles["t-header-search-box"]}>
            <div className={cx(styles["input-group"])}>
              <input
                type='text'
                className={cx(styles["form-control"])}
                id='inlineFormInputGroup'
                placeholder='Search'
                autoComplete='off' 
              />
              <button
                style={{ borderRadius: "50%" }}
                className={cx(styles["btn"], styles["btn-primary"])}
                type='submit'>  

                <IconContext.Provider value={{color: "white"}}> 
                  <GrFormNextLink />
                </IconContext.Provider>
                
              </button>
            </div>
          </form>
          <ul className={cx(styles["nav"], styles["ml-auto"])}>
            <li className={cx(styles["nav-item"], styles["dropdown"])}>
              <a
                className={styles["nav-link"]}
                href='#'
                id='notificationDropdown'
                data-toggle='dropdown'
                aria-expanded='false'>
                <AiOutlineBell style={{color: "black",fontSize: "19px"}}/>
              </a>
              <div
                className={cx(styles["dropdown-menu"], styles["navbar-dropdown"], styles["dropdown-menu-right"])}
                aria-labelledby='notificationDropdown'>
                <div className={styles["dropdown-header"]}>
                  <h6 className={styles["dropdown-title"]}>Notifications</h6>
                  <p className={styles["dropdown-title-text"]} >
                    You have 4 unread notification
                  </p>
                </div>
                <div className={styles["dropdown-body"]}>
                  <div className={styles["dropdown-list"]}>
                    <div 
                       className={cx(styles["icon-wrapper"], styles["rounded-circle"], styles["bg-inverse-primary"], styles["text-primary"])}>
                    </div>
                    <div 
                         className={styles["content-wrapper"]}
                    >
                      <small className={styles["name"]}>Storage Full</small>
                      <small className={styles["content-text"]}>
                        Server storage almost full
                      </small>
                    </div>
                  </div>
                  <div className={cx(styles["dropdown-list"])}>
                    <div className={cx(styles["icon-wrapper"], styles["rounded-circle"], styles["bg-inverse-success"], styles["text-success"])}>
                      <i className={cx(styles["mdi"], styles["mdi-cloud-upload"])} />
                    </div>
                    <div className={cx(styles["content-wrapper"])}>
                      <small className={cx(styles["name"])}>Upload Completed</small>
                      <small className={cx(styles["content-text"])}>
                        3 Files uploded successfully
                      </small>
                    </div>
                  </div>
                  <div className={cx(styles["dropdown-list"])}>
                    <div className={cx(styles["icon-wrapper"],styles["rounded-circle"], styles["bg-inverse-warning"], styles["text-warning"])}>
                      <i className={cx(styles["mdi mdi-security"])} />
                    </div>
                    <div className={cx(styles["content-wrapper"])}>
                      <small className={cx(styles["name"])}>Authentication Required</small>
                      <small className={cx(styles["content-text"])}>
                        Please verify your password to continue using cloud
                        services
                      </small>
                    </div>
                  </div>
                </div>
                <div className={cx(styles["dropdown-footer"])}>
                  <a href='#'>View All</a>
                </div>
              </div>
            </li>
            <li className={cx(styles["nav-item dropdown"])}>
              <a
                className={cx(styles["nav-link"])}
                href='#'
                id='messageDropdown'
                data-toggle='dropdown'
                aria-expanded='false'>
            
                  <BiMessageDetail style={{color: "black",fontSize: "19px"}} />
                {/* <i className={cx(styles["mdi mdi-message-outline mdi-1x' /> */}
                {/* <span className={cx(styles["notification-indicator"], styles["notification-indicator-primary"], styles["notification-indicator-ripple"])} /> */}
              </a>
              <div
                className={cx(styles["dropdown-menu"], styles["navbar-dropdown"], styles["dropdown-menu-right"])}
                aria-labelledby='messageDropdown'>
                <div className={cx(styles["dropdown-header"])}>
                  <h6 className={cx(styles["dropdown-title"])}>Messages</h6>
                  <p className={cx(styles["dropdown-title-text"])}>
                    You have 4 unread messages
                  </p>
                </div>
                <div className={cx(styles["dropdown-body"])}>
                  <div className={cx(styles["dropdown-list"])}>
                    <div className={cx(styles["image-wrapper"])}>
                      <img
                        className={cx(styles["profile-img"])}
                        src='assets/images/profile/male/image_1.png'
                        alt='profile image'
                      />
                      <div className={cx(styles["status-indicator"], styles["rounded-indicator"], styles["bg-success"])} />
                    </div>
                    <div className={cx(styles["content-wrapper"])}>
                      <small className={cx(styles["name"])}>Clifford Gordon</small>
                      <small className={cx(styles["content-text"])}>
                        Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                  </div>
                  <div className={cx(styles["dropdown-list"])}>
                    <div className={cx(styles["image-wrapper"])}>
                      <img
                        className={cx(styles["profile-img"])}
                        src='assets/images/profile/female/image_2.png'
                        alt='profile image'
                      />
                      <div className={cx(styles["status-indicator"], styles["rounded-indicator"],styles["bg-success"])} />
                    </div>
                    <div className={cx(styles["content-wrapper"])}>
                      <small className={cx(styles["name"])}>Rachel Doyle</small>
                      <small className={cx(styles["content-text"])}>
                        Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                  </div>
                  <div className={cx(styles["dropdown-list"])}>
                    <div className={cx(styles["image-wrapper"])}>
                      <img
                        className={cx(styles["profile-img"])}
                        src='assets/images/profile/male/image_3.png'
                        alt='profile image'
                      />
                      <div className={cx(styles["status-indicator"], styles["rounded-indicator"], styles["bg-warning"])} />
                    </div>
                    <div className={cx(styles["content-wrapper"])}>
                      <small className={cx(styles["name"])}>Lewis Guzman</small>
                      <small className={cx(styles["content-text"])}>
                        Lorem ipsum dolor sit amet.
                      </small>
                    </div>
                  </div>
                </div>
                <div className={cx(styles["dropdown-footer"])}>
                  <a href='#'>View All</a>
                </div>
              </div>
            </li>
            <li className={cx(styles["nav-item dropdown"])}>
              <a
                className={cx(styles["nav-link"])}
                href='#'
                id='appsDropdown'
                data-toggle='dropdown'
                aria-expanded='false'>
                <MdOutlineApps style={{color: "black",fontSize: "19px"}}/>
                {/* <i className={cx(styles["mdi mdi-apps mdi-1x' /> */}
              </a>
              <div
                className={cx(styles["dropdown-menu"], styles["navbar-dropdown"], styles["dropdown-menu-right"])}
                aria-labelledby='appsDropdown'>
                <div className={cx(styles["dropdown-header"])}>
                  <h6 className={cx(styles["dropdown-title"])}>Apps</h6>
                  <p className={cx(styles["dropdown-title-text"], styles["mt-2"])}>
                    Authentication required for 3 apps
                  </p>
                </div>
                <div className={cx(styles["dropdown-body"], styles["border-top"], styles["pt-0"])}>
                  <a className={cx(styles["dropdown-grid"])}>
                    <i className={cx(styles["grid-icon"], styles["mdi"], styles["mdi-jira"], styles["mdi-2x"])} />
                    <span className={cx(styles["grid-tittle"])}>Jira</span>
                  </a>
                  <a className={cx(styles["dropdown-grid"])}>
                    <i className={cx(styles["grid-icon"], styles["mdi"], styles["mdi-trello"], styles["mdi-2x"])} />
                    <span className={cx(styles["grid-tittle"])}>Trello</span>
                  </a>
                  <a className={cx(styles["dropdown-grid"])}>
                    <i className={cx(styles["grid-icon"], styles["mdi"], styles["mdi-artstation"], styles["mdi-2x"])} />
                    <span className={cx(styles["grid-tittle"])}>Artstation</span>
                  </a>
                  <a className={cx(styles["dropdown-grid"])}>
                    <i className={cx(styles["grid-icon"], styles["mdi"], styles["mdi-bitbucket"], styles["mdi-2xs"])} />
                    <span className={cx(styles["grid-tittle"])}>Bitbucket</span>
                  </a>
                </div>
                <div className={cx(styles["dropdown-footer"])}>
                  <a href='#'>View All</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 

export default React.memo(Header); 
