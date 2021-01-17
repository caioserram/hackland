import React, { useEffect, useState } from 'react';
import './hist-times.css';
import firebase from '../../config/firebase';
import * as Icon from "react-bootstrap-icons";

import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


import Times from '../../compenentes/times';

function HistTimes(props) {
    const[desafio, setDesafio] = useState({});
    const[descricao, setDescricao] = useState();
    const[descricaoTime, setDescricaoTime] = useState();
    const[titulo, setTitulo] = useState();
    const[nota,setNota] = useState('');
    const[love,setLove] = useState('');
    const[prazo,setPrazo] = useState('No prazo');
    const[bug,setBug] = useState('Sem problemas');
    const[produto,setProduto] = useState();
    const[msg, setMsg] = useState();
    const[times,setTimes] = useState([]);

    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        firebase.firestore().collection('desafios_times').doc(props.match.params.id).get().then(
            async(resultado) => {
                var buscaDesafio = await resultado.data().desafio
                setDesafio(resultado.data().desafio)
                setDescricaoTime(resultado.data().descricao)
                firebase.firestore().collection('desafios').doc(buscaDesafio).get().then(
                    resultadoDesafio => {
                        setDescricao(resultadoDesafio.data().descricao)
                        setTitulo(resultadoDesafio.data().titulo)
                    });
            }
        );
    }, [])

    return( 
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <h2 className="mx-auto"> { titulo } </h2>
                </div>
                <div className="row">
                    <p> Descrição do desafio: { descricao } </p>
                </div>        
                <div className="row">
                    <p> Descrição do time: { descricaoTime } </p>
                </div>          
                <div className="row">
                    <p> Produto final: { produto } </p>
                </div>                              
                <div className="row informacoes-detalhes">
                    <div class="col-3 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.StarFill /></span>
                        <p> { nota ? nota : ''} </p>
                    </div>
                    <div class="col-3 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.HeartFill /></span>
                        <p> { love ? love : ''} </p>
                    </div>
                    <div class="col-3 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.Clock /></span>
                        <p> { prazo ? prazo : ''} </p>
                    </div>   
                    <div class="col-3 caixa-detalhes">
                        <span className="icone-detalhes"><Icon.Bug /></span>
                        <p> { bug ? bug : ''} </p>
                    </div>              
                </div>      
            </div>              
            <Footer />
        </>
    )
}

export default HistTimes;