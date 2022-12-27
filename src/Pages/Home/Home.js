import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center mt-5'>
            <h2 className='fw-bolder fs-1'>Welcome to Keep</h2>
            <p>You Have to Login/Signup First To Add Task or View Your Task</p>
           <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
        </div>
    );
};

export default Home;