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

    const el = width > height && height < 500? 
    <div className={styles.container}>
        PLEASE ROTATE YOUR PHONE
    </div> : <></>

    return createPortal(
        el, 
        document.getElementById('portal')
    )

}

export default DisableLandscape