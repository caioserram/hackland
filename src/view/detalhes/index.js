import React, { useEffect, useState } from 'react';
import './detalhes.css';
import firebase from '../../config/firebase';
import * as Icon from "react-bootstrap-icons";

import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

function Detalhes(props) {
    const[desafio, setDesafio] = useState({});

    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        alert('carregou');
        console.log(props.match.params.id)
        firebase.firestore().collection('desafios').doc(props.match.params.id).get().then(
            resultado => {
                setDesafio(resultado.data());
            }
        );
    }, [])

    return( 
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    usuarioLogado === 0 ? <Redirect to='/login' /> : null
                }

                <div className="row">
                    <h2 className="mx-auto"> { desafio.titulo } </h2>
                </div>
                <div className="row">
                    <p> {desafio.descricao} </p>
                </div>
                <div className="row informacoes-detalhes">
                    <div class="col-4 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.CalendarCheck /></span>
                        <p> {desafio.data} </p>
                    </div>
                    <div class="col-4 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.Clock /></span>
                        <p> {desafio.hora} </p>
                    </div>                    
                    <div class="col-4 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.CashStack /></span>
                        <p> {desafio.premio ? 'R$' + desafio.premio : 'XP' } </p>
                    </div>
                </div>
                <div className="row">
                    {
                            usuarioEmail === desafio.usuarioEmail
                        ?
                            <Link to='' className="btn-editar-detalhes">
                                <span className="icone-detalhes"><Icon.PencilSquare /></span>
                            </Link>
                        :
                            ''
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detalhes;