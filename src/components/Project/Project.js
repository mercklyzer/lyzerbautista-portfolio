import React, { forwardRef } from "react"
import styles from './project.module.css'

const Project = forwardRef( ({title, subtitle, description, redirectTo, video, sourceCode}, ref) => {
    
    return (
        <section className={styles.project} ref={ref}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.header}>Project</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.exploreLeft}>
                        <a href={redirectTo} target={"_blank"} className={`${styles.explore}`}>EXPLORE</a>
                    </div>
                    <div className={styles.exploreLeft}>
                        <a href={sourceCode} target={"_blank"} className={`${styles.explore}`}>SOURCE CODE</a>
                    </div>
                </div>
                <div className={styles.contentRight} onClick={() => window.open(redirectTo, "_blank")}>
                    <video playsInline={true} muted={true} autoPlay={true} loop={true}>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className={styles.exploreRight}>
                        <a href={redirectTo} target={"_blank"} className={`${styles.explore}`}>EXPLORE</a>
                    </div>
                    <div className={styles.exploreRight}>
                        <a href={sourceCode} target={"_blank"} className={`${styles.explore}`}>CHECK CODE</a>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Project