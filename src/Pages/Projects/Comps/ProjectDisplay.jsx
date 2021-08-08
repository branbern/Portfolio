import React from 'react'
import './ProjectDisplay.scss';

const ProjectDisplay = (props) => {
    console.log(props,'hi')
    return (
        <div className='project-display'>
           <div className='project-inner'>
                <h2>{props.data.name}</h2>
                <p>{props.data.description}</p>
                <a href={props.data.gitlink}>Check it out on Git</a>
           </div>
        </div>
    )
}

export default ProjectDisplay;
