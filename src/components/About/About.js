import React, { useEffect, useRef } from "react"
import styles from './about.module.css'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const About = props => {
    const aboutRef = useRef()
    const aboutHeaderRef = useRef()
    const descriptionRef = useRef()
    const resumeRef = useRef()
    const imageRef = useRef()

    useEffect(() => {      
        gsap.registerPlugin(ScrollTrigger)

        const scrollTrigger = {
            trigger: aboutRef.current,
            start: `+${props.projectHeight} center`,
            // markers: true
        }

        gsap.to(aboutRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
        })

        gsap.from(aboutHeaderRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 0.5
        })
        gsap.to(aboutHeaderRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 0.5
        })
        
        gsap.from(descriptionRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 1
        })
        gsap.to(descriptionRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 1
        })

        gsap.from(resumeRef.current, {
            scrollTrigger,
            yPercent: 50,
            duration: 0.5,
            delay: 1.5
        })
        gsap.to(resumeRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 1.5
        })

        gsap.from(imageRef.current, {
            scrollTrigger,
            xPercent: 20,
            duration: 0.5,
            delay: 2
        })
        gsap.to(imageRef.current, {
            scrollTrigger,
            opacity: 1,
            duration: 0.5,
            delay: 2
        })
    }, [])


    return (
        <section className={styles.about} ref={aboutRef}>
            <div className={styles.aboutHeader} ref={aboutHeaderRef}>ABOUT</div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.description} ref={descriptionRef}>
                        Hi! I'm Lyzer Bautista, a passionate student who loves creating software. I specialize in websites, both frontend and backend. Currently, I'm on my final year in the University of the Philippines Diliman with the program of Computer Science.
                    </div>
                    <a className={styles.resume} href="#" ref={resumeRef}>Resume</a>

                </div>
                <div className={styles.containerRight}>
                    <img src={require('../../assets/about-me-white.png')} ref={imageRef} />
                </div>
            </div>
        </section>
    )
}

export default About