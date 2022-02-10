import React, { forwardRef } from "react"
import styles from './project.module.css'

const Project = forwardRef( (props, ref) => {
    
    return (
        <section className={styles.project} ref={ref}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.header}>Project</div>
                    <div className={styles.title}>Facebook Concept</div>
                    <div className={styles.subtitle}>NodeJS / Angular / MySQL / Sockets.io</div>
                    <div className={styles.description}>A platform where users can ask questions regarding their studies and get feedback and answers from other users. </div>
                    <a href="#" className={`${styles.explore} ${styles.exploreLeft}`}>EXPLORE</a>
                </div>
                <div className={styles.contentRight}>
                    <video playsInline={true} muted={true} autoPlay={true} loop={true}>
                        <source src={"https://nerby.com/wp-content/uploads/2021/01/Home_Facebook.mp4"} type="video/mp4" />
                    </video>
                    <a href="#" className={`${styles.explore} ${styles.exploreRight}`}>EXPLORE</a>
                </div>
            </div>
        </section>
    )
})

export default Project