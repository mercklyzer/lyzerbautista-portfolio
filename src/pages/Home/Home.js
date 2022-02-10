import React, { useEffect, useRef } from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Project from "../../components/Project/Project";
import styles from './home.module.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = props => {
    const project1 = useRef()
    const project2 = useRef()
    const project3 = useRef()

    useEffect(() => {
        const projects = [
            project1.current,
            project2.current,
            project3.current
        ]

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".projects-container",
              pin: true,
              scrub: 1,
              snap: 1 / (projects.length - 1),
              markers: true,
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "+=3500",
            }
          });
    }, [])

    return (
        <div>
            <HomeHeader />
            <div className="projects-container" style={{width: '400vw'}}>
                <Project ref={project1}/>
                <Project ref={project2}/>
                <Project ref={project3}/>
            </div>
        </div>
    )
}

export default Home