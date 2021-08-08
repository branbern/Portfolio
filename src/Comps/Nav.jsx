import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    return (
        <div className='nav-wrapper'>
            <nav className="navbar navbar-expand-lg nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Portfolio</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className={active === '/projects' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/projects')}><Link to="/projects">Projects</Link></li>
                        <li className={active === '/technologies' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/technologies')}><Link to="/technologies">Technologies</Link></li>
                        <li className={active === '/about' ? 'nav-link active': 'nav-link'} onClick={() => setActive('/about')}><Link to="/about">About</Link></li>
                    </ul>
                    <ul className="navbar-nav mr-auto my-2 my-lg-0 socials">
                        <li className='nav-link' onClick={() => setActive('/')}><a href="https://www.linkedin.com/in/brandonberning/"><i className="fab fa-linkedin"></i></a></li>
                        <li className='nav-link' onClick={() => setActive('/')}><a href="https://github.com/branbern"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
