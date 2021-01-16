import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './desafio.css';
import firebase from '../../config/firebase';
import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { Redirect } from 'react-router-dom';

function Desafio(){
    const[msgTipo, setMsgTipo] = useState();
    const[titulo,setTitulo] = useState();
    const[descricao,setDescricao] = useState();
    const[data,setData] = useState();
    const[hora,setHora] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    function cadastrar(){
        setMsgTipo(null);
        console.log(titulo, descricao, data, hora, usuarioEmail);
        db.collection('desafios').add({
            titulo: titulo,
            descricao: descricao,
            data: data,
            hora: hora,
            usuarioEmail: usuarioEmail
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
                    <h3> Cadastrar Desafio </h3>
                </div>
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label> Título: </label>
                            <input onChange={ (e) => setTitulo(e.target.value) } type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label> Descrição: </label>
                            <textarea onChange={ (e) => setDescricao(e.target.value) } className="form-control" rows="3" className="form-control" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <label>Data limite: </label>
                                    <input type="date" className="form-control" onChange={ (e) => setData(e.target.value) }/>
                                </div>
                                <div className="col-6">
                                    <label> Hora limite: </label>
                                    <input type="time" className="form-control" onChange={ (e) => setHora(e.target.value) }/>
                                </div>
                            </div>
                        </div>
                        <button onClick={cadastrar} type="button" className="btn btn-lg btn-block btn-login"> Cadastrar </button>
                    </form>
                </div>    
            </div>
            <Footer />
        </>    
    )
}

export default Desafio;