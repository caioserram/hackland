import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';

function Login(){

    const[email, setEmail] = useState();   
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();
        
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso');
        }).catch(erro => {
            setMsgTipo('erro');
        })
    }

    return(
        <div className="Login-content d-flex align-items-center">

            <form className="form-signin mx-auto">
                <div className="text-center mb4">
                <i class="far fa-calendar-check text-white fa-3x"></i>
                <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Login</h1>
                </div>   

                    <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />
                    <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Senha " />
                
                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Sign in</button>

                <div className="msg-login text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span><strong>Wow!</strong> Você está conectado! </span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique o usuário e senha! </span>
                    }    
                </div>

                <div className="opcoes-login  text-center">
                    <Link to='cadastro' className="mx-2">Quero me cadastrar</Link> 
                </div>                  
            </form>
        </div>  
    );
};

export default Login;