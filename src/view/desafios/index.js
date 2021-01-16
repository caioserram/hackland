import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './desafio.css';
import firebase from '../../config/firebase';
import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { Redirect } from 'react-router-dom';

function Desafio(){
    const[msgTipo, setMsgTipo] = useState();

    return(
        <>
            <Navbar />
            <div className="col-12 Desafio-content d-flex align-items-center">

                {
                    useSelector(state => state.usuarioLogado) == 0 ? <Redirect to='/login' /> : null
                }      

                <div className="row" id="titulo-form">
                    <h3> Cadastrar Desafio </h3>
                </div>
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label> Título: </label>
                            <input type="text" className="form-control" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label> Descrição: </label>
                            <textarea className="form-control" rows="3" className="form-control" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <label>Data limite: </label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-6">
                                    <label> Hora limite: </label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-lg btn-block btn-login"> Cadastrar </button>
                    </form>
                </div>    
            </div>
            <Footer />
        </>    
    )
}

export default Desafio;