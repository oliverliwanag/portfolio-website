import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
     
    return (
        <nav className="navbar">
            <a className="logo" href="#">o.o</a>
            <div className="menu">
                <img className="menuBtn" src={ menuOpen ? "/assets/close.png" : "/assets/menu.png" } alt="Menu" onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#skills">SKILLS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;