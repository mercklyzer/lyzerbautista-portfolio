import React from "react";
import styles from './homeHeader.module.css'

const HomeHeader = props => {
    return (
        <section className={styles.homeHeader}>
            <h1>Lyzer</h1>
            <div className={styles.detailsContainer}>
                <div className={styles.detailsContainerLeft}>
                    <a className={styles.email} href="mailto:mercklyzer@gmail.com">mercklyzer@gmail.com</a>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>/ Full Stack Web Developer</span>
                    </div>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>/ Software Engineer</span>
                    </div>
                </div>
                <div className={styles.detailsContainerRight}>
                    <div className={styles.descriptionContainer}>
                        University of the Philippines <br />
                        B.S. Computer Science <br />
                        Get in touch for availability. <br />
                    </div>
                    <div className={styles.socialLinksContainer}>
                        <a className={styles.socialLink} href="#">LinkedIn</a>
                        <a className={styles.socialLink} href="#">GitHub</a>
                        <a className={styles.socialLink} href="#">Twitter</a>
                    </div>
                </div>
                
            </div>
            <div className={styles.line}></div>
        </section>
    )
}

export default HomeHeader