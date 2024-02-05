import styles from '@/styles/Ourwork.module.css'
import PublicLayout from "components/layouts/PublicLayout";
import { useState } from 'react';


const Ourwork = ({ data }) => {
    const [BigEventActivationBtn, setBigEventActivationBtn] = useState(true);
    const [BrandActivationBtn, setBrandActivationBtn] = useState(true);
    const [CreativeDesignBtn, setCreativeDesignBtn] = useState(true);
    const [EsportsEventsBtn, setEsportsEventsBtn] = useState(true);
    const [spanActive1, setSpanActive1] = useState(false);
    const [spanActive2, setSpanActive2] = useState(false);
    const [spanActive3, setSpanActive3] = useState(false);
    const [spanActive4, setSpanActive4] = useState(false);
    
    const [BigEventActivation, setBigEventActivation] = useState(
        data.BigEventActivation.map((data)=>{
            return (
                <div key={data.id} className={styles.ImageCard} style={{backgroundImage: data.url}}><h3 className={styles.cardTitle}>{data.title}</h3>
                    <div className={styles.ImageCardCover}></div>
                </div>
            );
        })
    )
    const [BrandActivation, setBrandActivation] = useState(
        data.BrandActivation.map((data)=>{
            return (
                <div key={data.id} className={styles.ImageCard} style={{backgroundImage: data.url}}><h3 className={styles.cardTitle}>{data.title}</h3>
                    <div className={styles.ImageCardCover}></div>
                </div>
            );
        })
    )    
    const [CreativeDesign, setCreativeDesign] = useState(
        data.CreativeDesign.map((data)=>{
            return (
                <div key={data.id} className={styles.ImageCard} style={{backgroundImage: data.url}}><h3 className={styles.cardTitle}>{data.title}</h3>
                    <div className={styles.ImageCardCover}></div>
                </div>
            );
        }),
    )
    const [EsportsEvents, setEsportsEvents] = useState(
        data.EsportsEvents.map((data)=>{
            return (
                <div key={data.id} className={styles.ImageCard} style={{backgroundImage: data.url}}><h3 className={styles.cardTitle}>{data.title}</h3>
                    <div className={styles.ImageCardCover}></div>
                </div>
            );
        })
    )
    function BigEventActivationBtnClick(){
        setSpanActive1(styles.spanActive);
        setSpanActive2(false);
        setSpanActive3(false);
        setSpanActive4(false);
        setBigEventActivationBtn(true);
        setBrandActivationBtn(false);
        setCreativeDesignBtn(false);
        setEsportsEventsBtn(false);
    }
    function BrandActivationBtnClick(){
        setSpanActive1(false);
        setSpanActive2(styles.spanActive);
        setSpanActive3(false);
        setSpanActive4(false);
        setBigEventActivationBtn(false);
        setBrandActivationBtn(true);
        setCreativeDesignBtn(false);
        setEsportsEventsBtn(false);
    }
    function CreativeDesignBtnClick(){
        setSpanActive1(false);
        setSpanActive2(false);
        setSpanActive3(styles.spanActive);
        setSpanActive4(false);
        setBigEventActivationBtn(false);
        setBrandActivationBtn(false);
        setCreativeDesignBtn(true);
        setEsportsEventsBtn(false);

    }
    function EsportsEventsBtnClick(){
        setSpanActive1(false);
        setSpanActive2(false);
        setSpanActive3(false);
        setSpanActive4(styles.spanActive);
        setBigEventActivationBtn(false);
        setBrandActivationBtn(false);
        setCreativeDesignBtn(false);
        setEsportsEventsBtn(true);

    }
  return (
    <>
     <PublicLayout><br /><br />
     <div className={styles.newContainer}>
            <div className={`${styles.header} ${styles.avp}`}>
                <video className={styles.cardVideo} src="/img/video/cerebvid.mp4"  autoPlay muted loop ></video>
                <div className={styles.headerContent}>
                    <h1>OUR&nbsp;WORK</h1>
                </div>
                <div className={styles.fade}>
                    
                </div>
            </div>
              <div className={`${styles.whiteContainer}`} style={{ paddingBottom: "50px" }}>
                  <div className={styles.content}>
                        <div className={styles.inline} >
                           <span className={`${styles.spanHover} ${spanActive1}`} onClick={BigEventActivationBtnClick}>Big Event Activation</span> 
                            <span className={`${styles.spanHover} ${spanActive2}`} onClick={BrandActivationBtnClick}>Brand Activation</span>
                            <span className={`${styles.spanHover} ${spanActive3}`} onClick={CreativeDesignBtnClick}>Creative Design</span>
                            <span className={`${styles.spanHover} ${spanActive4}`} onClick={EsportsEventsBtnClick}>Esports Events</span>
                        </div>
                        <div className={styles.imageContainer}>
                        {BigEventActivationBtn ? BigEventActivation : null}
                        {BrandActivationBtn ? BrandActivation : null}
                        {CreativeDesignBtn ? CreativeDesign : null}
                        {EsportsEventsBtn ? EsportsEvents : null}
                        </div>

                        
                    </div>
              </div>
      </div>
     </PublicLayout>
    </>
  )
}

export default Ourwork;

export async function getStaticProps() {
    const fs = require("fs/promises");
    const path = require("path");
    const filePath = path.join(process.cwd(), "/data", "/ourwork.json");
  
    let data = await fs.readFile(filePath);
    data = JSON.parse(data);
  
    return {
      props: {
        data,
      },
    };
  }