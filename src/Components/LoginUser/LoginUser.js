import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const LoginUser = () => {
    
    const [error, setError] = useState("")

    const { handlelogin, handleGoogle } = useContext(AuthContext)
    
    const googleProvider = new GoogleAuthProvider()


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        
        const email = form.email.value
        const password = form.pass.value

        handlelogin(email, password)
            .then(result => {
                const user = result.user
                if (user?.uid) {
                    Swal.fire(
                        'Good job!',
                        'Login Successfull!',
                        'success'
                      )
                }
            })
            .catch(error => setError(error))

    }

    const handleGoogleSignIn = () => {
        handleGoogle(googleProvider)
            .then(result => {
                const user = result.user
                if (user) {
                    Swal.fire(
                        'Good job!',
                        'Account Created Successfully!',
                        'success'
                      )
                }
            })
        .catch(error => setError(error))
    }


    
    return (
        <div>
            <h2 className='mt-5 mb-5 fw-bold text-center'>Let's Start Adding Task</h2>
            <form className='container' onSubmit={handleSubmit}>
                <div class="row mb-3 d-flex justify-content-center">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-12 col-lg-6">
                    <input type="email" name="email" class="form-control" id="inputEmail3" placeholder='Enter Name'/>
                    </div>
                </div>
                <div class="row mb-3 d-flex justify-content-center">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-12 col-lg-6">
                    <input type="password" name="pass" class="form-control" placeholder='Enter Password' id="inputPassword3"/>
                    </div>
                </div>
                <p>{error.message}</p>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </div>
            </form>
                <div className="col-12 container d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={handleGoogleSignIn}>Sign Up With Google</button>
            </div>
            <div className='container d-flex justify-content-center'>
                <Link to="/signup"><button className='btn btn-link mt-3'>New To This Account?Please SignUp</button></Link>
            </div>
        </div>
    );
};

export default LoginUser;