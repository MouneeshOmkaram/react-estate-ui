import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';

function Navbar() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [user, setUser] = useState(false);

    return (
        <nav>
            <div className="left">
                <Link to='/' className='logo'>
                    <img src="/logo.jpg" alt="logo" />
                    <span>UrbanHut</span>
                </Link>
                <Link to="/">Home</Link>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                {user ? (
                    <div className='user'>
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
                        <span>John Doe</span>
                        <Link className='button' to='/profile'>
                            <div className="notification">1</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="">Sign in</a>
                        <a className='register' href="">Sign up</a>
                    </>
                )}
                <div className="menuIcon" onClick={() => setShowDrawer((prevState) => !prevState)}>
                    <img src="/menu.png" alt="menu" />
                </div>
                <div className={showDrawer ? "menu active" : "menu"}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
