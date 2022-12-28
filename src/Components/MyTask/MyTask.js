import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const MyTask = () => {

    const { user } = useContext(AuthContext)
    
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    const fetchData = () => {
        fetch(`http://localhost:5000/task/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTasks(data)
            
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
                    navigate("/completedtask")
                }
            })
        .catch(error => console.error(error))
        
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetchData(data)
                if (data.acknowledged) {
                    Swal.fire(
                        'Opps!',
                        'Task Deleted Successfully',
                        'success'
                    )
                    navigate("/completedtask")
                }
            })
        .catch(err=> console.error(err))
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
                        tasks?.filter(data => data.isCompleted !== true).map(task =>
                           
                            <div class="col col-lg-4">
                                <div class="card">
                               
                                <div class="card-body">
                                    <h5 class="card-title d-flex justify-content-center">{task.task}</h5>
                                    <div className='d-flex justify-content-center'>
                                        <button className='btn btn-link'>Details</button>
                                        <button className='btn btn-link'>Update Task</button>
                                        <button className='btn btn-link' onClick={()=> handleDelete(task._id)}>Delete Task</button>
                                  </div>
                                <div className='d-flex justify-content-center mt-3'>
                                        <button className='btn btn-primary' onClick={() => handleUpdate(task._id)}>Completed Task</button>
                                 </div>
                                </div>
                                </div>
                            </div>
                    
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default MyTask;