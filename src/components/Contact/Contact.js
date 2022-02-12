import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import styles from './contact.module.css'
import ScrollTrigger from "gsap/ScrollTrigger"

const Contact = props => {
    const contactRef = useRef()
    const emailRef = useRef()
    const socialLinksRef = useRef()
    const copyrightRef = useRef()

    const [animateHeader, setAnimateHeader] = useState(false)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const scrollTrigger = {
            trigger: contactRef.current,
            start: `+${props.projectHeight} center`,
            markers: true
        }

        gsap.from(contactRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 0.5
        })
        gsap.to(contactRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => setAnimateHeader(true)
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
            <div className={`${styles.header} ${animateHeader? styles.animateHeader : ''}`} ref={contactRef}>GET IN TOUCH</div>
            <div className={styles.emailContainer} ref={emailRef}>
                <a className={styles.email} href="mailto:mercklyzer@gmail.com">mercklyzer@gmail.com</a>
            </div>
            <div className={styles.socialLinksContainer} ref={socialLinksRef}>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                </div>
            </div>
            <div className={styles.copyright} ref={copyrightRef}>© Lyzer Bautista. All Rights Reserved.</div>
        </section>
    )
}

export default Contact