import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './criar-time.css';
import firebase from '../../config/firebase';
import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { Redirect } from 'react-router-dom';

function CadastroTime(props){
    const[msgTipo, setMsgTipo] = useState();
    const[descricao,setDescricao] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    function cadastrarTime(){
        setMsgTipo(null);
        db.collection('desafios_times').add({
            desafio: props.match.params.id,
            usuario: usuarioEmail,
            descricao: descricao
        }).then(() => {
            setMsgTipo('sucesso');
        }).catch(erro => {
            setMsgTipo('erro');
        })
    }


    return(
        <>
            <Navbar />
            <div className="col-12 Desafio-content d-flex align-items-center">

                {
                    useSelector(state => state.usuarioLogado) === 0 ? <Redirect to='/login' /> : null
                }      

                <div className="row" id="titulo-form">
                    <h3> Criar Time </h3>
                </div>
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label> Descrição: </label>
                            <textarea onChange={ (e) => setDescricao(e.target.value) } className="form-control" rows="3" className="form-control" />
                        </div>
                        <button onClick={cadastrarTime} type="button" className="btn btn-lg btn-block btn-login"> Cadastrar </button>
                    </form>
                </div>    
            </div>
            <div className="msg-login text-center my-5">
                    {
                        msgTipo === 'sucesso' && <span><strong>Wow!</strong> Você está conectado! </span>
                    }
                    {
                        msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique o usuário e senha! </span>
                    }    
                </div>            
            <Footer />
        </>    
    )
}

export default CadastroTime;