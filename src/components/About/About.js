import React, { useEffect, useRef } from "react"
import styles from './about.module.css'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const About = props => {
    const aboutRef = useRef()
    const aboutHeaderRef = useRef()

    console.log(props.projectHeight);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const t1 = gsap.timeline()
        console.log(t1);

        t1.to(aboutRef.current, {
            scrollTrigger: {
                trigger: aboutRef.current,
                start: `+${props.projectHeight} center`,
                // markers: true
            },
            opacity: 1,
            duration: 1
        })
        .to(aboutHeaderRef, {
            opacity: 1,
            duration: 0.5
        })
    }, [])


    return (
        <section className={styles.about} ref={aboutRef}>
            <div className={styles.aboutHeader} ref={aboutHeaderRef}>ABOUT</div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.description}>
                        Hi! I'm Lyzer Bautista, a passionate student who loves creating software. I specialize in websites, both frontend and backend. Currently, I'm on my final year in the University of the Philippines Diliman with the program of Computer Science.
                    </div>
                    <a className={styles.resume} href="#">Resume</a>

                </div>
                <div className={styles.containerRight}>
                    <img src={require('../../assets/about-me-white.png')} />
                </div>
            </div>
        </section>
    )
}

export default About