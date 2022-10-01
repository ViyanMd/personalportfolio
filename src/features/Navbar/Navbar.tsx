import React from "react";
import './Navbar.scss';
import logo from '@/assets/images/hearts.png';

export const Navbar: React.FC = () => {


    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt=""/>
            <div className="navigation">
                <ul className="navigation__links">
                    <li key="home"><a className="link" href="#home">HOME</a></li>
                    <li key="projects"><a className="link" href="#projects">PROJECTS</a></li>
                    <li key="links"><a className="link" href="#links">LINKS</a></li>
                    <li key="ukraine"><a className="link" href="#ukraine">UKRAINE</a></li>
                </ul>
            </div>
        </nav>
    );
};
