import React, { useEffect, useState } from 'react';
import './detalhes.css';
import firebase from '../../config/firebase';

import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

function Detalhes(props) {
    const[desafio, setDesafio] = useState({});

    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    console.log(usuarioEmail)

    useEffect(() => {
        alert('carregou');
        console.log(props.match.params.id)
        firebase.firestore().collection('desafios').doc(props.match.params.id).get().then(
            resultado => {
                setDesafio(resultado.data());
                console.log(desafio.usuarioEmail)
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
                    <h2 className="mx-auto"> Título </h2>
                </div>
                <div className="row">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur est eget justo condimentum posuere. Cras velit nulla, sagittis ac ultrices quis, sagittis vel velit. Vestibulum ut sollicitudin lacus, id interdum diam. In eleifend pellentesque metus, sed semper augue condimentum vitae. Mauris aliquet diam ligula. Quisque nec neque accumsan, consectetur sem a, tempus elit. Nullam ullamcorper ipsum quis feugiat rutrum. </p>
                </div>
                <div className="row">
                    {
                            usuarioEmail === desafio.usuarioEmail
                        ?
                            <Link to='' className="btn-editar">
                                Editar
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