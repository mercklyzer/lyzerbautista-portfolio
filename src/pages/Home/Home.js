import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Project from "../../components/Project/Project";
import styles from './home.module.css'

const Home = props => {
    return (
        <div>
            <HomeHeader />
            <Project />
            <Project />
            <Project />
        </div>
    )
}

export default Home