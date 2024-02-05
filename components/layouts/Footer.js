import styles from "@/styles/Footer.module.css";
import { Image } from "react-bootstrap";
import { Modal, Button } from 'react-bootstrap'
import React, { useState } from "react";
import Link from "next/link";
import CustomLink from "components/custom/links/CustomLink";
const Footer = () => {
 
 

  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.pages}`}>
            <ul className={`${styles.ul} col-xl-4 col-lg-6 col-md-6 col-xs-6`} >
              <Link href='/' legacyBehavior>
                <a className={styles.logo}>
                  <img alt="" src="/img/icon/cereblogo.png" height={40} className={`${styles.logoC}  align-top me-2`} />
                
                </a>
              </Link>  
              {/* <h3 className={`${styles.h3}`}>Footer</h3> */}
              <li className={`${styles.li} ${styles.textFooter}`}>
              1180 Megastar Building, Quezon Avenue,<br/> Quezon City Philippines 1005 (02) 7117 9722 Business@cerebrum.gg
              </li>
              <Link href='https://www.facebook.com/CerebrumDesignStudio' legacyBehavior>
                <a className={styles.logo}>
                  <img alt="" src="/img/socials/fb.png" height={40} className={`${styles.logoS} align-top me-2`} />
                
                </a>
              </Link>
              <Link href='https://www.youtube.com/@femaleproleague5632' legacyBehavior>
                <a className={styles.logo}>
                  <img alt="" src="/img/socials/yt.png" height={40} className={`${styles.logoS}  align-top me-2`} />
                
                </a>
              </Link>
              <Link href='https://www.instagram.com/cerebrumdesignstudio' legacyBehavior>
                <a className={styles.logo}>
                  <img alt="" src="/img/socials/ins.png" height={40} className={`${styles.logoS}  align-top me-2`} />
                
                </a>
              </Link>
              
            </ul>
          </div>
        </div>
        {/* <div className={`${styles.social}`}>
          <i className={`${styles.i}`}><img src="/img/sponsor/infinixWhite.png" height={17} alt="hero banner" ></img></i>
          <i className={`${styles.i}`}><Image src="/img/sponsor/Moonton.png" height={27} alt="hero banner" ></Image></i>
          <i className={`${styles.i}`}><Image src="/img/sponsor/ML_Logo.png" height={17} alt="hero banner" ></Image></i>
        </div> */}
        <div className={`${styles.info}`}>
          <div className={`${styles.copyright}`}>©2020-2023 | Cerebrum Design Studio | All rights reserved</div>
        </div>
      </footer>
    </>
  );
};
export default Footer;