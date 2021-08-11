import React from 'react'
import './ProjectDisplay.scss';

const ProjectDisplay = (props) => {
    console.log(props,'hi')
    return (
        <div className='project-display'>
                <div className='project-inner'>
                    <a href={props.data.gitlink}>
                        <h2>{props.data.name}</h2> 
                    </a>
                    <p>{props.data.description}</p>
                </div>
        </div>
    )
}

export default ProjectDisplay;
