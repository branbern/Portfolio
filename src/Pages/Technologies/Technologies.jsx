import React from 'react'
import './Technologies.scss';
import TechTag from './Comps/TechTag'

const Technologies = () =>  {

    return (
        <div className='technologies'>
            <div className='info'>
                <h1>Technologies</h1>
                <p>I've worked with a range of technologies in the web development world. From Back-End all the way to design, here are some of my favorites.</p>
            </div>

            <div className='types'>
                <div className='front-end'>
                    <h2>Front-End</h2>
                    <TechTag tag={'Javascript'}/>
                    <TechTag tag={'HTML'}/>
                    <TechTag tag={'CSS'}/>
                    <TechTag tag={'React'}/>
                </div>

                <div className='back-end'>
                    <h2>Back-End</h2>
                    <TechTag tag={'.net'}/>
                    <TechTag tag={'Node'}/>
                    <TechTag tag={'Git'}/>
                    <TechTag tag={'AWS'}/>
                </div>
                <div className='ui-ux'>
                    <h2>UI/UX</h2>
                    <TechTag tag={'Illustrator'}/>
                    <TechTag tag={'Photoshop'}/>
                </div>
            </div>

        </div>)
}

export default Technologies;

