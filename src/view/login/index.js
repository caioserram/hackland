import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="Login-content d-flex align-items-center">

            <form className="form-signin mx-auto">
                <div className="text-center mb4">
                <i class="far fa-calendar-check text-white fa-3x"></i>
                <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>   

                    <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />
                    <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha " />
                
                <button className="btn btn-lg btn-block btn-login" type="button">Sign in</button>
            </form>
        </div>
    );
};

export default Login;