import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const CompletedTask = () => {

    const { user } = useContext(AuthContext)
    
    const [tasks, setTasks] = useState([])

    

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

            {
                tasks.length > 0 ? <h2 className='text-center'>Congratulations, You Have Completed {tasks.length}</h2> : <h2 className='text-center'>You Have Completed {tasks.length}</h2>
            }
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
                                        <button className='btn btn-primary'>Completed Task</button>
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
        </div>
    );
};

export default CompletedTask;