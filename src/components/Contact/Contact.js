import React from "react"
import styles from './contact.module.css'

const Contact = props => {
    return (
        <section className={styles.contact}>
            <div className={styles.header}>GET IN TOUCH</div>
            <div className={styles.emailContainer}>
                <a className={styles.email} href="mailto:mercklyzer@gmail.com">mercklyzer@gmail.com</a>
            </div>
            <div className={styles.socialLinksContainer}>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                </div>
            </div>
            <div className={styles.copyright}>© Lyzer Bautista. All Rights Reserved.</div>
        </section>
    )
}

export default Contact