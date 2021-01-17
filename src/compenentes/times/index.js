import React from 'react';
import { Link } from 'react-router-dom';
import './times.css';

function Times({time, dono, origem}){

    return(
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h6> ID: { time } </h6>
                    <p className="card-text text-justify"> Detalhes </p>
                    <div className="row rodape-card d-flex align-items-center">
                        <Link to={'/times/' + time} className="btn btn-sm btn-detalhes"> 
                            {   dono == 1 && origem == 'detalhes'  ?   'Gerenciar' : null }
                            {   dono != 1 && origem == 'detalhes'  ?   'Ver time'  : null }
                            {   origem == 'perfil'  ?  'Ver projeto' : null }
                        </Link>
                    </div>                 
                </div>
                <div className="card-detalhes">
                    <div className="col-12 card-detalhes-titulo">
                        COMPLETO
                    </div>   
                </div>                   
            </div>
        </div>
    )
}

export default Times;