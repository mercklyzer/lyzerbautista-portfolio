import React from "react"
import { createPortal } from "react-dom"
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './disableLandscape.module.css'

const DisableLandscape = props => {
    const {width, height} = useWindowDimensions()
    
    if(width > height && height < 500){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'auto'
    }

    const el = width > height && height < 800? 
    <div className={styles.container}>
        <div className={styles.containerLeft}>
            <img src={require('../../assets/me-bw.jpg')} alt={'Lyzer in black and white'} />
        </div>
        <div className={styles.containerRight}>
            PLEASE ROTATE YOUR PHONE VERTICALLY FOR BETTER EXPERIENCE.
        </div>
    </div> : <></>

    return createPortal(
        el, 
        document.getElementById('portal')
    )

}

export default DisableLandscape