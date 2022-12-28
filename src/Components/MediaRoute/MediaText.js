import React from 'react';

const MediaText = ({ txt }) => {
    
    const { task, email } = txt
    console.log(task)

    const date = new Date().toDateString()

    return (
        <div>
            <div className='container mx-auto mt-5 text-center'>
                <hr />
                <h3 className='fs-5 lg-fs-3'>Task Name: {task}</h3>
                <h4 className='fs-5 lg-fs-3'>Email: {email}</h4>
                <h4 className='fs-5 lg-fs-3'>Added Date: {date}</h4>
            </div>
            
        </div>
    );
};

export default MediaText;