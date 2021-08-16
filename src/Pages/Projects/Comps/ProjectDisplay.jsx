import React from 'react'
import './ProjectDisplay.scss';

const ProjectDisplay = (props) => {
    console.log(props,'hi')
    let live = ''
    if(props.data.live) {
        live = <a href={props.data.live}>Live Website</a>
    }
    return (
        <div className='project-display'>
            <a href={props.data.gitlink}>
                <h2>{props.data.name}</h2> 
            </a>
            <p>{props.data.description}</p>
                {live}
        </div>
    )
}

export default ProjectDisplay;
