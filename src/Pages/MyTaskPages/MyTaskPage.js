import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MyTask from '../../Components/MyTask/MyTask';
import { AuthContext } from '../../Context/AuthProvider';

const MyTaskPage = () => {

    return (
        <div>
            <MyTask />
        </div>
    );
};

export default MyTaskPage;