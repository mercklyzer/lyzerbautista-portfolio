import React from "react"
import styles from './topHeader.module.css'

const TopHeader = props => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>Projects</div>
            <div className={styles.item}>About Me</div>
            <div className={styles.item}>Contact Me</div>
            <div className={styles.item}>Resume</div>
        </div>
    )
}

export default TopHeader