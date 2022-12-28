import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import "./completedTask.css"

const CompletedTask = () => {

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

    const handleNotCompleted = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                fetchData(data)
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire(
                        '',
                        'Task  Not Completed',
                        'success'
                    )
                    navigate("/mytask")
                    
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

            <h2 className='text-center mt-5 mb-5 fw-bold'>Completed Task</h2>
            <div>
                <div className='container mx-auto mt-5'>
                    <div class="row g-3">
                    {
                                tasks?.filter(data => data.isCompleted === true).map(task =>
                                    
                                <div class="col col-lg-4">
                                    <div class="card">
                                
                                    <div class="card-body">
                                        <h5 class="card-title d-flex justify-content-center">{task.task}</h5>
                                        
                                    <div className='d-flex justify-content-around mt-3'>
                                            <button className='btn btn-dark' onClick={()=> handleDelete(task._id)}>Delete Task</button>       
                                            <button className='btn btn-primary' onClick={()=> handleNotCompleted(task._id)}>Not Completed</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                        
                        )
                    }
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center commentcontainer'>Add Comment</h2>
            </div>
        </div>
    );
};

export default CompletedTask;