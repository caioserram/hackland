import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({id, titulo, detalhes, inscritos, data, premio}){

    return(
        <div className="col-md-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h4> {titulo} </h4>
                    <p className="card-text text-justify"> {detalhes} </p>
                    <div className="row rodape-card d-flex align-items-center">
                        <div className="col-6">
                            <Link to={ '/detalhes/' + id } className="btn btn-sm btn-detalhes"> + detalhes </Link>
                        </div>
                        <div className="col-6 texto-acessos">
                            {inscritos ? inscritos : 0}    
                        </div>
                    </div>                 
                </div>
                <div className="card-detalhes">
                    <div className="col-12 card-detalhes-titulo">
                        ENTREGA E PRÊMIO
                    </div>
                    <div className="row">
                        <div className="col-6 itens-card">
                            {data}
                        </div>
                        <div className="col-6 itens-card">
                            {premio ? 'R$ ' + premio : 'XP'}    
                        </div>  
                    </div>    
                </div>                   
            </div>
        </div>
    )
}

export default Card;