import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="container form_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto form_wrapper">
                    <div className=" text-center">
                        <h2>LogIn</h2>
                        <form>
                            <div className="form-floating mb-3 mt-4">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="register_footer d-flex">
                                <p>Create a New Account</p>
                                <Link to="/register">Go to Register</Link>
                            </div>
                            <button className="btn btn-primary">LogIn</button>
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

export default Login;
