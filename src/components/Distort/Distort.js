import React, { forwardRef, useEffect, useRef } from "react"
import hoverEffect from 'hover-effect';
import styles from './distort.module.css'
import overlay from '../../assets/overlay.png'
import image1 from '../../assets/about-me-white.png'
import image2 from '../../assets/about-me-maroon.png'


const Distort = forwardRef( (props, ref) => {
    const imageRef = useRef()

    useEffect(()=> {
        let image_animate = new hoverEffect({
            parent: imageRef.current,
            intensity: .3,
            image1: image1,
            image2: image2,
            displacementImage: overlay,
            imagesRatio: 1
        })
    }, [])


    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.image} ref={imageRef}></div>
        </div>
    )
})

export default Distort