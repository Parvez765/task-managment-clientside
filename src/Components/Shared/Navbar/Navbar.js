import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';
import "./Navbar.css"

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                Swal.fire(
                    'User LogOut Successfully',
                    '',
                    'success'
                  )
        })
    }


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
                            {
                                user && <>
                                 <NavLink to="/addtask"  style={({ isActive }) =>isActive ? activeStyle : undefined}>AddTask</NavLink>
                                    <NavLink to="/mytask" style={({ isActive }) =>isActive ? activeStyle : undefined}>MyTask</NavLink>
                                    <NavLink to="/completedtask" style={({ isActive }) =>isActive ? activeStyle : undefined}>CompletedTask</NavLink>
                                </>
                       }
                       
                            {
                                user?  <NavLink to="/login"><button className='btn btn-dark' onClick={handleLogOut}>Logout</button></NavLink> :    <NavLink to="/login"><button className='btn btn-primary'>Login</button></NavLink>  
                            }
                        
                    </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;