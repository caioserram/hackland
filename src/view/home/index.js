import React, { useEffect, useState } from 'react';
import './home.css';
import firebase from '../../config/firebase';

import Navbar from '../../compenentes/navbar';
import Footer from '../../compenentes/footer';
import Card from '../../compenentes/card';

function Home(){
    const[desafios, setDesafios] = useState([]);

    useEffect(() => {
        alert('carregou');
        firebase.firestore().collection('desafios').get().then(
            async(resultado) => {
                let listaDesafios = []
                await resultado.docs.forEach(doc => {
                    listaDesafios.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setDesafios(listaDesafios);
            }
        )
    }, [])

    return(
        <>
        <Navbar />
        <div className="row">
            {
                desafios.map(item => <Card key={item.id} id={item.id} 
                    titulo={item.titulo}
                    detalhes={item.descricao}
                    data={item.data}
                    hora={item.hora}
                />) 
            }
        </div>
        <Footer />
        </>
    );
}

export default Home;