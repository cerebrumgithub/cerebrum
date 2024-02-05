import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Contactus.module.css'
import cards from '@/styles/Card.module.css'
import PublicLayout from "components/layouts/PublicLayout";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'
export default function About() {
    // async function handleOnSubmit(e) {
    //     e.preventDefault();
    //     const formData = {}
    //     Array.from(e.currentTarget.elements).forEach(field => {
    //         if (!field.name ) return;
    //         formData[field.name] = field.value;
    //     });
    //     await axios({
    //         method: 'POST',
    //         url: '/api/mail',
    //         data: JSON.stringify(formData)
    //     })
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Your message has been successfully sent!',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
        // fetch('/api/mailtest', {
        //     method: 'POST',
        //     body: JSON.stringify(formData)
        // })
      
        // console.log(formData);
    // }
    // const ClickApi = async () => {
    //     await fetch('/api/mailtest',{
    //         method: 'POST',
    //         body: JSON.stringify({name: 'test'})
    //     })
    // }
    
    const [formData, setFormData] = useState({
        "Name": "",
        "email": "",
        "contact": "",
        "number": "",
        "message": "",
        "from": "Cerebrum"
      });
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value,
        }));
      };
    async function handleSubmit1(e) {
        e.preventDefault();
        
  
        let url = `https://docs.google.com/forms/d/e/1FAIpQLSdWXdth7LSPofcQggCPUQ6gL6dpFHZD2uaKPHAygzQhZpOgzA/formResponse?entry.415127518=${formData["from"]}&entry.334823051=${formData["Name"]}&entry.1434309519=${formData["email"]}&entry.925781969=${formData["number"]}&entry.1844575229=${formData["message"]}`;
        
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
          // body: newFormData
        }).catch((err) => {
          console.log("err", err);
        });
        functions();
        e.target.reset();
    }
    const functions = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `<span style="font-family: 'Montserrat', sans-serif">Your message has been successfully sent!</span>`,
            showConfirmButton: false,
            timer: 1500
            })
    }
    
   
  return (
    <>
     <PublicLayout><br /><br />
    
     <div className={styles.newContainer}>
              <div className={`${styles.whiteContainer}`} style={{ paddingBottom: "50px" }}>
             
                  <div className={styles.row}>
                    <div className={styles.column1}> 
                        <h1>LET&lsquo;S<br/>WORK<br/>TOGETHER.</h1>
                        <p>We like working with passionate people who know the value of what design can do, and how it can positively shift the way people think.</p>
                      
                        <h3>FOLLOW OUR SOCIALS</h3>

                        <div className={styles.padding}>
                            <Link href='https://www.facebook.com/CerebrumDesignStudio' legacyBehavior>
                                <a >
                                    <img className={styles.imgSize} style={{verticalAlign: "middle"}}src='/img/socials/fb.png'/>
                                    <div style={{verticalAlign: "middle", display: "inline"}} >
                                        <span className={styles.socials}>facebook.com/CerebrumDesignStudio</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.padding}>
                            <Link href='https://www.youtube.com/@femaleproleague5632' legacyBehavior>
                                <a >
                                    <img className={styles.imgSize} style={{verticalAlign: "middle"}}src='/img/socials/yt.png'/>
                                    <div style={{verticalAlign: "middle", display: "inline"}} >
                                        <span className={styles.socials}>youtube.com/@femaleproleague5632</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.padding}>
                            <Link href='https://www.instagram.com/cerebrumdesignstudio' legacyBehavior>
                                <a >
                                    <img className={styles.imgSize} style={{verticalAlign: "middle"}}src='/img/socials/ins.png'/>
                                    <div style={{verticalAlign: "middle", display: "inline"}} >
                                        <span className={styles.socials}>instagram.com/cerebrumdesignstudio</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.column2}>
                        <form onSubmit={handleSubmit1} target='_self'>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input name="name" onChange={handleInputData("Name")} type="text" className={styles.formField} placeholder="Name" required/>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                            </div><br/><br/>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input name="email" onChange={handleInputData("email")} type="email" className={styles.formField} placeholder="Email Address" required/>
                                <label htmlFor="name" className={styles.formLabel}>Email Address</label>
                            </div><br/><br/>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input name="number" onChange={handleInputData("number")} type="number" className={styles.formField} placeholder="Contact number" required/>
                                <label htmlFor="name" className={styles.formLabel}>Contact Number</label>
                            </div><br/><br/>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>Tell us about your project <span style={{fontSize: '12px', fontWeight: '300'}}>(e.g project overview, timeline)</span></p>
                            <br/>
                                <textarea name="message" onChange={handleInputData("message")} className={styles.textarea} required></textarea>
                                <button className={styles.button} role="button">Send</button>
                                <input name="subject" type="hidden" value="Cerebrum Contact Form"/>
                                <input name="from" type="hidden" value="Notif.Cerebrum"/>
                        </form>
                    </div>
                    
                </div>
                
                
              </div>
      </div>
     </PublicLayout>
    </>
  )
}
