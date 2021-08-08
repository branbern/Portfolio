import React from 'react'
import ProjectDisplay from './Comps/ProjectDisplay'
import './Projects.scss'

const Projects = () =>  {


    const projects = [
        {
            name: 'Navy Training Tool',
            description:  'My Girlfriend is currently training for qualifications in the navy. She kept bringing me more and more papers to study with her so i decided to make an easier way to digest the information.',
            gitlink: 'https://github.com/branbern/navy-training',
            src: ''
        },
        {
            name: 'Blockdesign',
            description:  'To learn AWS I created a project in which users can log in to create wonderful master peices that they can then save for later. ',
            gitlink: 'https://github.com/branbern/blockdesign',
            src: ''
        },
        {
            name: 'Blockdesign',
            description:  'To learn AWS I created a project in which users can log in to create wonderful master peices that they can then save for later. ',
            gitlink: 'https://github.com/branbern/blockdesign',
            src: ''
        },
        {
            name: 'Beaumont-demo',
            description:  'A remake of a popular Squarespace template.',
            gitlink: 'https://github.com/branbern/squarespace-clone-beaumont-demo',
            src: ''
        },    
        {
            name: 'Bailard-demo',
            description:  'A remake of a popular Squarespace template.',
            gitlink: 'https://github.com/branbern/squarespace-clone-bailard-demo',
            src: ''
        },
        {
            name: 'Paloma-demo',
            description:  'A remake of a popular Squarespace template.',
            gitlink: 'https://github.com/branbern/squarespace-clone-paloma-demo',
            src: ''
        },
    ]


    let displayedProjectsList = []
    projects.map((data, index) => {
            displayedProjectsList.push(<ProjectDisplay data={data} key={index}/>)
    })

    return (
        <div className='projects'>
            {displayedProjectsList}  
        </div>
        )
}

export default Projects;