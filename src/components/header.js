import React from "react";
import './header.css';

function Headers () {
    return (
        <header>
        <div className="container" id="home">
                <nav>
                    <ul>
                        <li ><a href="#home" className="navlink">Home</a></li>
                        <li ><a href="#about" className="navlink">About</a></li>
                        <li ><a href="#project" className="navlink">Project</a></li>
                        <li ><a href="#contact" className="navlink">Contact</a></li>
                    </ul>
                </nav>
        </div>
        <div className="profile">
            <img className="picprof" src="/assets/profile.jpg" alt=""/>
            <h1>Nur Rachmat</h1>
            <p>Web Developer | Lecturer</p>
        </div>
    </header>
    )
};

export default Headers