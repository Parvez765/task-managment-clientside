import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const MyTask = () => {

    const { user } = useContext(AuthContext)
    
    const [taskAdded, setTaskAdded] = useState([])


    const fetchData = () => {
        fetch(`http://localhost:5000/task/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTaskAdded(data)
            
    })
    }
    

    useEffect(() => {
       fetchData()
    }, [user?.email])

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                fetchData(data)
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Task Completed Successfully',
                        'success'
                        )
                }
            })
        .catch(error => console.error(error))
        
    }

    return (
        <div>
            <div className='text-center'>
                {
                    user?.email && <p>Welcome, {user?.email}</p>
                }
            </div>
            <h2 className='text-center mt-3 mb-5 fw-bold'>View Your Task</h2>
            
            <div className='container mx-auto mt-5'>
                <div class="row g-3">
                {
                    taskAdded?.map(task => task.isCompleted !== true && <>
                            <div class="col col-lg-4">
                                <div class="card">
                               
                                <div class="card-body">
                                    <h5 class="card-title">{task.task}</h5>
                                   <button className='btn btn-link'>Update Task</button>
                                   <button className='btn btn-link'>Delete Task</button>
                                   <button className='btn btn-primary' onClick={() => handleUpdate(task._id)}>Completed Task</button>
                                </div>
                                </div>
                            </div>
                    
                    </>)
                }
                </div>
            </div>
        </div>
    );
};

export default MyTask;