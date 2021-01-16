import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';


function Profile(){

    const dispatch = useDispatch();
    const[email, setEmail] = useState();   
    const[senha, setSenha] = useState();    
    const[msgTipo, setMsgTipo] = useState();

    return(
        <div>
            <Navbar></Navbar>
            <div className="d-flex align-items-center">
                {
                    useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
                }

                <p>Seu email é {email}</p>
                <p>Sua senha é {senha}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;