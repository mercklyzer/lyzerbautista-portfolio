import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import styles from './contact.module.css'
import ScrollTrigger from "gsap/ScrollTrigger"

const Contact = props => {
    const contactRef = useRef()
    const emailRef = useRef()
    const socialLinksRef = useRef()
    const copyrightRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const scrollTrigger = {
            trigger: contactRef.current,
            start: `+${props.projectHeight} center`,
        }

        gsap.from(contactRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 0.5,
        })
        gsap.to(contactRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
        })

        gsap.from(emailRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 1
        })
        gsap.to(emailRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 1
        })

        gsap.from(socialLinksRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 1.5
        })
        gsap.to(socialLinksRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 1.5
        })

        gsap.from(copyrightRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 2
        })
        gsap.to(copyrightRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 2
        })
    })

    return (
        <section className={styles.contact}>
            <div className={`${styles.header}`} ref={contactRef}>GET IN TOUCH</div>
            <div className={styles.emailContainer} ref={emailRef}>
                <a className={styles.email} href="mailto:mercklyzer@gmail.com">mercklyzer@gmail.com</a>
            </div>
            <div className={styles.socialLinksContainer} ref={socialLinksRef}>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
            <div className={styles.copyright} ref={copyrightRef}>© Lyzer Bautista. All Rights Reserved.</div>
        </section>
    )
}

export default Contact