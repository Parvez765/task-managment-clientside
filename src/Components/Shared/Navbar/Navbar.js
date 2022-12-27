import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

    let activeStyle = {
        borderBottom : "2px solid blue"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg container">
            <div className="container-fluid">
                <Link to="/" className='logo'>Keep</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav navitem">
                        <NavLink to="/addtask"  style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>AddTask</NavLink>
                        <NavLink to="/mytask" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>MyTask</NavLink>
                        <NavLink to="/completedtask" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>CompletedTask</NavLink>
                       
                       
                        
                    </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;