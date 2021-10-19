import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="container form_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto form_wrapper">
                    <div className=" text-center">
                        <h2>Register</h2>
                        <form>
                            <div className="form-floating mb-3 mt-4">
                                <input type="text" className="form-control" id="floatingInput" placeholder=" "/>
                                <label for="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingPassword" placeholder=" "/>
                                <label for="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder=" "/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder=" "/>
                                <label for="floatingPassword">Re-Password</label>
                            </div>
                            <div className="register_footer d-flex">
                                <p>If already have an account?</p>
                                <Link to="/logIn">Go to Login</Link>
                            </div>
                            <button className="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <button onClick={googleSignIn} className="btn btn-primary text-start">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;