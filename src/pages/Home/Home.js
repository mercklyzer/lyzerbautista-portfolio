import React, { useEffect, useRef, useState } from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Project from "../../components/Project/Project";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowDimensions from '../../hooks/useWindowDimensions'
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

import BrainlyVideo from '../../assets/Brainly.mp4'
import TrailyzerVideo from '../../assets/Trailyzer.mp4'
import LyzCoVideo from '../../assets/Lyz-Co.mp4'
import DCSWalkingSimulatorVideo from '../../assets/DCS-Walking-Simulator.mp4'

const Home = props => {
    const {width, height} = useWindowDimensions()

    const project1 = useRef()
    const project2 = useRef()
    const project3 = useRef()
    const project4 = useRef()

    useEffect(() => {
        const projects = [
            project1.current,
            project2.current,
            project3.current,
            project4.current
        ]

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".projects-container",
              start: "8% top",
              pin: true,
              scrub: 1,
              end: `+=${projects.length > 2? width*(projects.length - 1) : width}`,
            }
          });
    }, [])

    return (
        <div>
            <HomeHeader />
            <div className="projects-container" style={{width: '400vw'}}>
                <Project ref={project1} 
                    title={'Brainly'} 
                    subtitle={'NodeJS / Angular / MySQL / Sockets.io'} 
                    description={'A platform where users can ask questions regarding their studies and get feedback and answers from other users.'} 
                    video={BrainlyVideo} 
                    redirectTo={'http://brainly-web.s3-website-ap-southeast-1.amazonaws.com/'} 
                />
                <Project ref={project2}
                    title={'Trailyzer'} 
                    subtitle={'ReactJS'} 
                    description={'A web application that provides you trailer of your favorite movies whose UI is inspired from Netflix.'} 
                    video={TrailyzerVideo}
                    redirectTo={'https://mercklyzer.github.io/trailyzer/'} 
                />
                <Project ref={project3}
                    title={'Lyz-Co'} 
                    subtitle={'VanillaJS / GSAP'} 
                    description={'An unofficial portfolio of an accounting firm located in the heart of Rockwell, Philippines.'} 
                    video={LyzCoVideo}
                    redirectTo={'https://mercklyzer.github.io/Lyz-Co/'} 
                />
                <Project ref={project4}
                    title={'DCS Walking Simulator'} 
                    subtitle={'C# / Unity'} 
                    description={'DCS Walking Simulator is a desktop game that familiarizes students of University of the Philippines Diliman to the DCS building. To access, use the password "misskonakatip".'} 
                    video={DCSWalkingSimulatorVideo}
                    redirectTo={'https://snickerdu.itch.io/dcs-walkthrough-simulator'} 
                />
            </div>
            <About projectHeight={width*3}/>
            <Contact projectHeight={width*3}/>
        </div>
    )
}

export default Home