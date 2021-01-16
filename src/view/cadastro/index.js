import React, { useState } from 'react';
import './cadastro.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario(){
    const[email, setEmail] = useState();   
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();
    const[msg, setMsg] = useState();

    function cadastrar(){
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('É necessário informar e-mail e senha');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso');
        }).catch(erro => {
            setMsgTipo('erro');
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('E-mail já cadastrado');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('Formato de e-mail inválido');
                    break;    
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde');
                    break;
            }
            return
        })
    }

    return(
        <div className="Login-content d-flex align-items-center">

            <form className="form-signin mx-auto">
                <div className="text-center mb4">
                <i class="far fa-calendar-check text-white fa-3x"></i>
                <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Cadastro</h1>
                </div>   

                    <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email " />
                    <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Senha " />
                
                <button onClick={cadastrar} className="btn btn-lg btn-block btn-login" type="button">Cadastrar</button>

                <div className="msg-login text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span><strong>Wow!</strong> Cadastrado com sucesso! </span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} </span>
                    }    
                </div>  
            </form>
        </div>  
    );
}

export default NovoUsuario;