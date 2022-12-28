import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MediaText from './MediaText';

const MediaRoute = () => {

    const {user} = useContext(AuthContext)
    const [texts, setText] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/task/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setText(data)
                
        })
    }, [user?.email])

   

    return (
        <div>
            <div className='text-center'>
                {
                        user?.email && <p>Welcome, {user?.email}</p>
                }
          </div>
            <h2 className='text-center mt-5 mb-5 fw-bolder'>Task You Have Added</h2>
            {
                texts?.map(txt => <MediaText key={txt._id} txt={txt} />)    
            }
          
        </div>
    );
};

export default MediaRoute;