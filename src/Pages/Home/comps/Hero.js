import React from 'react'
import BgAnimation from '../../../BackgroundAnimation/BackgroundAnimation';
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero">
  
            <div className="left-side">
                <h1 className="hero-title">
                    Hello, My Name Is<br/>  Brandon Berning
                </h1>
                <p className="hero-text">
                  A full-stack web developer
                </p>
                <div className="btn learn-more"
                    onClick={()=> window.location = 'https: //google.com'}>
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