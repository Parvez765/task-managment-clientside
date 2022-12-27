import React from 'react';
import Swal from 'sweetalert2';

const AddTask = () => {

    const handleOnSubmit = event => {
        event.preventDefault()
        const form = event.target
        const task = form.task.value
        const taskDescription = form.taskDescription.value
        // console.log(task, taskDescription)
        const addedTask = {task}
        const image = form.img.files[0]
        
        const imgbbKey = process.env.REACT_APP_imgbbKey

        const formData = new FormData()
        formData.append("image", image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success || !imgdata.success) {
                    const taskdetails = { task, taskDescription, imgdata }
                    fetch(`http://localhost:5000/task`, {
                        method: "POST",
                        headers: {
                            "content-type" : "application/json"
                        },
                        body : JSON.stringify(taskdetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                Swal.fire(
                                    'Task Addedd Successfully!',
                                    'Thank You',
                                    'success'
                                  )
                           }
                            
                    })
                }
            })
        
    }
    const handleOnKeyDown = event => {

        const task = event.target.value
        console.log(task)
        const addTask = {task}

        if (event.key === "Enter") {
            fetch(`http://localhost:5000/task`, {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(addTask)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        Swal.fire(
                            'Task Addedd Successfully!',
                            'Thank You',
                            'success'
                          )
                   }
                    
            })
        }
    }


    return (
        <div>
            <h2 className='mt-5 mb-5 text-center'>Add Your Task</h2>
            <form className="row g-3 container mx-auto" onSubmit={handleOnSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Task Name</label>
                    <input type="text" onKeyDown={handleOnKeyDown} name="task" className="form-control" placeholder='Enter Your Task Name' required/>
                </div>
                <div className="col-md-6">
                <label className="form-label">Upload Images (Optional)</label>
                    <div className="mb-3">
                       <input className="form-control" type="file" name="img" id="formFile"/>
                    </div>
                </div>
                <div className=" col-12 lg-col-6 ">
                    <label className="form-label">Task Description</label><br/>
                    <textarea class="form-control" name="taskDescription" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Task Description'></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;