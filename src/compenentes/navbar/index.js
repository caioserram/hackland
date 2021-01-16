import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import Logo from '../../imagens/logo.png';

function Navbar(){
    return(
        <>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm" id="navbar">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to='/'> <img src={Logo} alt="HACKLAND" id='logo-img' /></Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3" id="lista-nav">
                <Link to='pag1' className="p-2 texto-nav">Pagina 1</Link>  
                <Link to='pag2' className="p-2 texto-nav">Pagina 2</Link>
                <Link to='pag3' className="p-2 texto-nav">Pagina 3</Link>
                <Link to='pag4' className="p-2 texto-nav">Pagina 4</Link>
            </nav>
        </div>
        </>
    );
}

export default Navbar;