import React from 'react'
import BgAnimation from '../../../BackgroundAnimation/BackgroundAnimation';
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero">
  
            <div className="left-side">
                <h1 className="hero-title">

                Brandon Berning
                <br />
                Full-stack web developer
                </h1>
                <p className="hero-text">
                    I would say my love for creating simple, efficient <br/>and beautiful components is what drives me to <br/>continue coding.
                </p>
                <div className="btn learn-more"
                    onClick={()=> window.location = '/projects'}>
                    View my work
                </div>
            </div>
            <div className="right-side">
                <BgAnimation/>
            </div>
        </div>
    )
}


export default Hero;