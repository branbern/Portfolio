import React from 'react'
import './TechTag.scss';

const TechTag = (props) =>  {

    return (
        <div className='tech-tag'>
            <p>{props.tag}</p>
        </div>)
}

export default TechTag;

