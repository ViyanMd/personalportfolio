import React from "react";
import './Navbar.scss';
import logo from '@/assets/images/hearts.png';

export const Navbar: React.FC = () => {

    const handleScrollEvent = (e: React.UIEvent<HTMLElement>): void => {
        console.log(e.target);
    }

    return (
        <nav className="navbar" onScroll={handleScrollEvent}>
            <img className="navbar__logo" src={logo} alt=""/>
            <div className="navigation">
                <ul className="navigation__links">
                    <li key="home"><a className="link" href="home">HOME</a></li>
                    <li key="projects"><a className="link" href="projects">PROJECTS</a></li>
                    <li key="links"><a className="link" href="links">LINKS</a></li>
                </ul>
            </div>
        </nav>
    );
};
