import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Login(){

    const[email, setEmail] = useState();   
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();
        
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => { 
                dispatch({type: 'LOG_IN', usuarioEmail: email}) 
            }, 2000)
        }).catch(erro => {
            setMsgTipo('erro');
        })
    }

    return(
        <div className="Login-content d-flex align-items-center">

            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
            }

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
                        msgTipo === 'erro' && <span><strong>Ops!</strong> Algo aconteceu... </span>
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