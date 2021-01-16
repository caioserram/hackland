import React from 'react';
import { Link } from 'react-router-dom';
import './times.css';

function Times({time, dono}){

    return(
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h6> ID: { time } </h6>
                    <p className="card-text text-justify"> Detalhes </p>
                    <div className="row rodape-card d-flex align-items-center">
                        <Link to='' className="btn btn-sm btn-detalhes"> 
                            {
                                    dono == 1
                                ?   
                                    'Gerenciar'
                                :
                                    'Ver time'
                            }
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