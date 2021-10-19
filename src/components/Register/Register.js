import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { googleSignIn, emailAndPasswordSignIn, error } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");

    // get users input fild value
        const handleName = e => {
            setName(e.target.value);
        }
    
        const handleEmail = (e) => {
            setEmail(e.target.value);
        };
    
        const handlePassword = (e) => {
            setPassword(e.target.value);
        };
    //------------------------

    const handleRagistration = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setUserError('Password should be at least 6 characters')
            return;
        }
        emailAndPasswordSignIn(email, password);
    }

    return (
        <div className="container form_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto form_wrapper">
                    <div className=" text-center">
                        <h2>Register</h2>
                        <form onSubmit={handleRagistration}>
                            <div className="form-floating mb-3 mt-4">
                                <input onBlur={handleName} type="text" className="form-control" id="floatingInput" placeholder=" "/>
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handleEmail} type="email" className="form-control" id="floatingPassword" required placeholder=" "/>
                                <label htmlFor="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" required placeholder=" "/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder=" "/>
                                <label htmlFor="floatingPassword">Re-Password</label>
                            </div>
                            <div className="register_footer d-flex">
                                <p>If already have an account?</p>
                                <Link to="/logIn">Go to Login</Link>
                            </div>
                            <p className="text-danger">{error || userError}</p>
                            {/* <button onClick={handleRagistration} className="btn btn-primary">Register</button> */}
                            <input className="btn btn-primary" type="submit" value="Register" />
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