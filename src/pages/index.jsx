import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import cards from '@/styles/Card.module.css'
import PublicLayout from "components/layouts/PublicLayout";
import CustomLink from "components/custom/links/CustomLink";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  // const [upperTitle, setUpperTitle] = useState([])
  // async function getTitles(){
  //   const postData = {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/titles`, postData);
  //   const response =  await res.json();
  //   console.log(response.titles);
  //   setUpperTitle(response.titles);
  // }
  // useEffect(() => {
  //   getTitles();
  // },[])
  
 
  return (
    <>
     <PublicLayout><br /><br />
     <div className={styles.newContainer}>
     
          <div className={styles.header}>
            <video className={styles.cardVideo} src="/img/video/cerebvid.mp4"  autoPlay muted loop ></video>
                  <div className={styles.headerContent}>
                      <h1>LET&lsquo;S<br/>WORK<br/>TOGETHER</h1>
                               
                      {/* {upperTitle.map((titles) => {
                        return( <>
                        <div key={titles.id}>
                          <h2 >{titles.up_header ? titles.up_header : "LOREM IPSUM"}</h2>
                          <h1>{titles.main_header ? titles.main_header : "LET'S WORK TOGETHER"}</h1>
                          <h2>{titles.bot_header ? titles.bot_header : "LOREM IPSUM"}</h2>
                          <CustomLink href='/contactus'>
                            <button className={styles.button} role="button">{titles.btn_text ? titles.btn_text: "CONTACT US"}</button>
                            <button className={styles.button} role="button">CONTACT US</button>
                          </CustomLink>
                        </div>
                        </>
                        )
                      })} */}
                  </div>
                  <div className={styles.fade}>
                    
                  </div>
          </div>
              <div className={`${styles.whiteContainer}`} style={{ paddingBottom: "0px" }}>
                  <div className={styles.content}>
                    <div></div>
                    <h1>WHAT WE SERVE</h1>
                    {/* <p> Text here</p> */}
                  </div>
                  
                  <div className={styles.contentImage}>
                    <figure className={cards.snip1187}>
                      
                      <img src="/img/image/img_design_studio.png" alt="Design Studio"/>
                      <figcaption>
                 
                        <div className={cards.icon}>
                          <span><i ></i></span>
                        </div>
                        <h2>Design<span> Studio</span></h2>
                      </figcaption>
                      <CustomLink href='/contactus'></CustomLink>
                      {/* <a href="#"></a> */}
                    </figure>
                    <figure className={cards.snip1187}>
                      <img src="/img/image/img_design_studio_text.png" alt="Design Studio"/>
                     
                      <figcaption>
                        <div className={cards.icon}>
                          <span><i ></i></span>
                        </div>
                       
                      </figcaption>
                      <CustomLink href='/contactus'></CustomLink>
                      {/* <a href="#"></a> */}
                    </figure>
                  </div>
                  
                  <div className={styles.contentImage}>
                    <figure className={cards.snip1187}>
                        <img src="/img/image/img_builds_text.png" alt="Design Studio"/>
                      
                        <figcaption>
                          <div className={cards.icon}>
                            <span><i ></i></span>
                          </div>
                        
                        </figcaption>
                        <CustomLink href='/builds'></CustomLink>
                        {/* <a href="#"></a> */}
                      </figure>
                      <figure className={cards.snip1187}>
                        <img src="/img/image/img_builds.png" alt="Design Studio"/>
                        <figcaption>
                  
                          <div className={cards.icon}>
                            <span><i ></i></span>
                          </div>
                          <h2><span>BUILDS</span></h2>
                        </figcaption>
                        <CustomLink href='/builds'></CustomLink>
                        {/* <a href="#"></a> */}
                      </figure>
                  </div>

                  <div className={styles.contentImage}>
                    <figure className={cards.snip1187}>
                      <img src="/img/image/img_media.png" alt="Design Studio"/>
                      <figcaption>
                 
                        <div className={cards.icon}>
                          <span><i ></i></span>
                        </div>
                        <h2><span>MEDIA</span></h2>
                      </figcaption>
                      <CustomLink href='/media'></CustomLink>
                      {/* <a href="#"></a> */}
                    </figure>
                    <figure className={cards.snip1187}>
                      <img src="/img/image/img_media_text.png" alt="Design Studio"/>
                     
                      <figcaption>
                        <div className={cards.icon}>
                          <span><i ></i></span>
                        </div>
                       
                      </figcaption>
                      <CustomLink href='/media'></CustomLink>
                      {/* <a href="#"></a> */}
                    </figure>
                  </div>

                  <div className={styles.contentImage}>
                    <figure className={cards.snip1187}>
                        <img src="/img/image/img_collective_text.png" alt="Design Studio"/>
                      
                        <figcaption>
                          <div className={cards.icon}>
                            <span><i ></i></span>
                          </div>
                        
                        </figcaption>
                        <CustomLink href='/collective'></CustomLink>
                        {/* <a href="#"></a> */}
                      </figure>
                      <figure className={cards.snip1187}>
                        <img src="/img/image/img_collective.png" alt="Design Studio"/>
                        <figcaption>
                  
                          <div className={cards.icon}>
                            <span><i ></i></span>
                          </div>
                          <h2><span>COLLECTIVE</span></h2>
                        </figcaption>
                        <CustomLink href='/collective'></CustomLink>
                        {/* <a href="#"></a> */}
                      </figure>
                  </div>
              </div>
              <div className={`${styles.blackContainer}`} >
                <div className={styles.blackContent}>
                    <h1>OUR CLIENTS</h1>
                </div>
              </div>

              <div className={`${styles.whiteContainer}`} >
                <div className={styles.contentClient}>
                    <img className={styles.cardVideo} src="/img/ourClient/clients.png" alt="Design Studio"/>
                </div>
              </div>
          
      </div>
     </PublicLayout>
    </>
  )
}
