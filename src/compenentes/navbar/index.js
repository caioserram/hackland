import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../imagens/logo.png';

function Navbar(){
    function sair(){
        console.log('sair');
        dispatch({type: 'LOG_OUT'});
    }

    const dispatch = useDispatch();

    return(
        <>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm" id="navbar">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to='/'> <img src={Logo} alt="HACKLAND" id='logo-img' /></Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3" id="lista-nav">
                {
                        useSelector(state => state.usuarioLogado) === 0
                    ?
                        <>
                        <Link to='/login' className="p-2 texto-nav">Login</Link>  
                        <Link to='/cadastro' className="p-2 texto-nav">Cadastrar</Link>
                        </>
                    :    
                        <>
                        <Link to='/hacks' className="p-2 texto-nav">Hacks</Link>
                        <Link to='/desafios' className="p-2 texto-nav">Meus desafios</Link>
                        <Link to='/profile' className="p-2 texto-nav">Meu perfil</Link>
                        <Link to='/' onClick={sair} className="p-2 texto-nav">Sair</Link>
                        </>
                }

            </nav>
        </div>
        </>
    );
}

export default Navbar;