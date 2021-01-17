import React, { useEffect, useState } from 'react';
import './perfil.css';
import firebase from '../../config/firebase';
import * as Icon from "react-bootstrap-icons";

import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Times from '../../compenentes/times';

function Detalhes(props) {
    const[dadosUsuario,setDadosUsuario] = useState([]);

    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        firebase.firestore().collection('desafios_times').where('usuario','==',usuarioEmail).get().then(
            async(resultado) => {
                let listaUsuario = []
                await resultado.docs.forEach(doc => {
                    listaUsuario.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setDadosUsuario(listaUsuario);
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
                    <h2 className="mx-auto"> { usuarioEmail } </h2>
                </div>   
            </div>           
            <div className="row">
                {
                    dadosUsuario.map(item => <Times key={item.id} id={item.id} 
                        time={item.id}       
                        dono={usuarioEmail == item.usuarioEmail ? 1 : 0}  
                        origem={'perfil'}                                 
                    />) 
                }
            </div>            
            <Footer />
        </>
    )
}

export default Detalhes;