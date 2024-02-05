
import styles from '@/styles/About.module.css'
import PublicLayout from "components/layouts/PublicLayout";


export default function Admin() {
  return (
    <>
     <PublicLayout><br /><br />
     <div className={styles.newContainer}>
            <div className={styles.header}>
                <video className={styles.cardVideo} src="/img/video/cerebvid.mp4"  autoPlay muted loop ></video>
                <div className={styles.headerContent}>
                    <h1>CEREBRUM&nbsp;DESIGN&nbsp;STUDIO</h1>
                </div>
            </div>
              <div className={`${styles.whiteContainer}`} style={{ paddingBottom: "50px" }}>
                  <div className={styles.content}>
                    <h1>CEREBRUM DESIGN STUDIO</h1>
                    <p>Cerebrum Design Studio is founded by its President and CEO Bermin Tiu, after his stint in selling real state properties and over 4,000 products of a retail company.</p><br/>
                    <p>The company started as a one-man team with just one laptop, one fax machine, and a landline. Cerebrum Design Studio emerged as a walking trophy of an out-of-the-box mindset, hard work, and immense dedication to set a mark in the advertising, sales, and marketing industry.</p><br/>
                    <p>The company successfully delivered its first client&lsquo;s demand within four months of its foundation. Cerebrum survived the major setback in 2020 due to the global pandemic with its indomitable spirit and banking on the platitude, &ldquo;Losing is the beginning of winning.&ldquo; Cerebrum bounced back and kicked higher with its expansion and gave birth to Cerebrum Esports, thus making the company pandemic-proof against all adversities, launching Esports Tournaments, honing talents, producing representatives in International Tournaments, and eventually dubbed as &ldquo;the fastest-growing Esports group in the country.&ldquo;</p><br/>
                    <p>Cerebrum Design Studio continues to soar high with its dedication and unwavering spirit to deliver projects and top-shelf service, focusing on its commitment to every client&lsquo;s needs and requirements to reach its target market. The company believes in investing in people with its President and CEO&lsquo;s vision - &ldquo;To make every employee feel a sense of ownership while devoting their talents and skills for the company&lsquo;s growth and development for every client&lsquo;s demand and satisfaction.&ldquo;</p><br/>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column1}>
                        <h3>MISSION</h3>
                        <p>To become the embodiment of top-shelf service and to work with the best brands and organizations in Southeast Asia.</p>
                    </div>
                    <div className={styles.column2}>
                        <h3>VISION</h3>
                        <p>To assist our clients and partners by providing the most exceptional, unique and creative solutions for their business requirements.</p>
                    </div>
                  </div>
              </div>
      </div>
     </PublicLayout>
    </>
  )
}
