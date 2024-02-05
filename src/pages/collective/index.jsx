import styles from '@/styles/Collective.module.css'
import PublicLayout from "components/layouts/PublicLayout";
import Swal from 'sweetalert2'
import { useState } from 'react';
export default function Collective() {
    // async function handleOnSubmit(e) {
    //     e.preventDefault();
    //     const formData = {}
    //     Array.from(e.currentTarget.elements).forEach(field => {
    //         if (!field.name ) return;
    //         formData[field.name] = field.value;
    //     });
    //     fetch('/api/mail', {
    //         method: 'POST',
    //         body: JSON.stringify(formData)
    //     })
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Your message has been successfully sent!',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
        
    // }
    const [formData, setFormData] = useState({
        "Name": "",
        "email": "",
        "contact": "",
        "number": "",
        "message": "",
        "from": "Collective"
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
                        <div className={styles.margbt}>
                            <img className={styles.imgSizeLogo} src='/img/icon/collectiveLogo.png'/>
                            <h3>WHAT IS CEREBRUM COLLECTIVE?</h3><br/>
                            <p>Cerebrum Collective is a talent agency that handles well known personalities from different strands of the entertainment industry and offers multiple varieties of benefits to it&lsquo;s talents.</p>
                        
                            <h3>Our Services:</h3>
                            <br/>
                            <li>Full marketing Campaign</li>
                            <li>TRIP Above the line medium (Television,Radio,Internet and Print)</li>
                            <li>Event Management and Activations</li>
                            <li>Website and Mobile Design Application Development</li>
                        </div>
                    </div>
                    
                    <div className={styles.column2}>
                        <form  onSubmit={handleSubmit1} target='_self'>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input type="text" name='name' onChange={handleInputData("Name")} className={styles.formField} placeholder="Name" required/>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                            </div><br/><br/>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input type="email" name='email' onChange={handleInputData("email")} className={styles.formField} placeholder="Email Address" required/>
                                <label htmlFor="name" className={styles.formLabel}>Email Address</label>
                            </div><br/><br/>
                            <div className={`${styles.formGroup} ${styles.field}`}>
                                <input type="number" name='number' onChange={handleInputData("number")} className={styles.formField} placeholder="Contact Number" required/>
                                <label htmlFor="name" className={styles.formLabel}>Contact Number</label>
                            </div><br/><br/>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>Tell us about your project <span style={{fontSize: '12px', fontWeight: '300'}}>(e.g project overview, timeline)</span></p>
                            <br/>
                            <textarea name='message' onChange={handleInputData("message")} className={styles.textarea} required></textarea>
                    
                            <button className={styles.button} role="button">Send</button>
                            <input name="subject" type="hidden" value="Collective Contact Form"/>
                            <input name="from" type="hidden" value="Notif.Collective@cerebrum.gg"/>
                        </form>
                    </div>
                    
                </div>
                
                
              </div>
      </div>
     </PublicLayout>
    </>
  )
}
