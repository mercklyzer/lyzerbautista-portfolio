import React, { forwardRef } from "react"
import styles from './project.module.css'
import BrainlyVideo from '../../assets/Brainly.mp4'

const Project = forwardRef( ({title, subtitle, description, redirectTo, gif}, ref) => {
    
    return (
        <section className={styles.project} ref={ref}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.header}>Project</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <div className={styles.description}>{description}</div>
                    <a href={redirectTo} target={"_blank"} className={`${styles.explore} ${styles.exploreLeft}`}>EXPLORE</a>
                </div>
                <div className={styles.contentRight} onClick={() => window.open(redirectTo, "_blank")}>
                    <img src={gif} style={{height: 'auto%', width: '100%'}}/>
                    <a href={redirectTo} target={"_blank"} className={`${styles.explore} ${styles.exploreRight}`}>EXPLORE</a>
                </div>
            </div>
        </section>
    )
})

export default Project