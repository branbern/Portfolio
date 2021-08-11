import React from 'react'
import './About.scss';

const About = () =>  {
    return (
        <div className='about'>
             <div className='info'>
                <h2>About</h2>
                <p>In highschool I was a region champion and runner up at state. I play lots of video games when I have time to kill: League of Legends, Rimworld, and Rust to name a few. I also love creating and listening to all types of music and find it to be one of the most enjoyable pastimes. </p>
            </div>

            <div className='info'>
                <h2>Resume</h2>
                <p>Feel free to check out my resume!</p>
            </div>

            <div className='pdf'>
                <object data="Brandonberningresume.pdf" type="application/pdf" width="100%" height="100%">
                    alt : <a href="test.pdf">test.pdf</a>
                </object>
            </div>
        </div>)
}

export default About;
