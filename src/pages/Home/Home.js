import React, { useEffect, useRef } from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Project from "../../components/Project/Project";
import styles from './home.module.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Home = props => {
    const {width, height} = useWindowDimensions()

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
              end: `+=${projects.length > 2? width*(projects.length - 1) : width}`,
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
            <div className="about" style={{height: '50vh', border: '2px solid red'}}></div>
        </div>
    )
}

export default Home