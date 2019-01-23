import React from 'react';

// if doesn't work consider adding "(" instead

const Navbar = () => (
    <div>
        <nav className="nav bg-dark justify-content-center">
            <a className="nav-link text-white" href="index.html#aboutMe">About</a>
            <a className="nav-link text-white" href="index.html#portfolio">Portfolio</a>
            <a className="nav-link text-white" href="index.html#contact">Contact</a>
        </nav>
    </div>
);

export default Navbar;