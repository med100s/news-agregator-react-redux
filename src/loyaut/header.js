import React from 'react';


export default function Header() {

    function mobileMenu() {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector(".nav-menu").classList.toggle("active");
    }

    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <a href="/" className="nav-logo">SomeThing.</a>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link">News</a>
                        </li>
                        <li className="nav-item">
                            <a href="/options" className="nav-link">Options</a>
                        </li>
                        <li className="nav-item">
                            <a href="/Help" className="nav-link">Help</a>
                        </li>
                        <li className="nav-item">
                            <a href="/About" className="nav-link">About</a>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={mobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>

        </div>
    )
}