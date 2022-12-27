import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const SignupUser = () => {

    const [error, setError] = useState("")

    const { handleCreateUser, handleGoogle } = useContext(AuthContext)
    
    const googleProvider = new GoogleAuthProvider()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.text.value
        const email = form.email.value
        const password = form.pass.value
        const ReEnterPassword = form.repass.value

        if (password !== ReEnterPassword) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Did not Match!',
               
              })
        }

        handleCreateUser(email, password)
            .then(result => {
                const user = result.user
                if (user?.uid) {
                    Swal.fire(
                        'Good job!',
                        'Account Created Successfully!',
                        'success'
                      )
                }
            })
           
    }

    const handleGoogleSignIn = () => {
        handleGoogle(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
        .catch(error => setError(error))
    }
    

    return (
        <div>
            <h2 className='text-center mt-5 fw-bold'>Welcome to SignUp</h2>
            <p className='text-center  mb-5 '>Few Steps Away to Become Our Valuable User</p>
            <form className="row g-3 container mx-auto mt-5" onSubmit={handleOnSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" name="text" className="form-control" placeholder='Enter Name' required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email" required/>
                </div>
                <div className="col-6">
                    <label className="form-label">Password</label>
                    <input type="password" name="pass" className="form-control" placeholder="Enter Password" required/>
                </div>
                <div className="col-6">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name="repass" className="form-control" placeholder="ReEnter Password" required/>
                </div>
                <div className="col-12">
                <p>{error.message}</p>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                <hr />
            </form>
                <div className="col-12 container">
                    <button type="submit" className="btn btn-primary" onClick={handleGoogleSignIn}>Sign Up With Google</button>
                </div>
        </div>
    );
};

export default SignupUser;