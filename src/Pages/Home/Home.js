import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className='text-center mt-5'>
            <h2 className='fw-bolder fs-1'>Welcome to Keep</h2>
            <p>Start Your Journey With Us</p>
            {
                user ?  <Link to="/addtask"><button className='btn btn-primary'>Add Task</button></Link> :  <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
          }
        </div>
    );
};

export default Home;