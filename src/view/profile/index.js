import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Spinner, Card, Col, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../../compenentes/navbar";
import Footer from "../../compenentes/footer";
import Loading from "../../compenentes/loading";

function Profile() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(
    useSelector((state) => state.usuarioEmail)
  );
  const [currentSelectedExperience, setCurrentSelectedExperience] = useState(
    ""
  );

  const [carregando, setCarregando] = useState(true);

  const [declaration, setDeclaration] = useState("");
  const [hackingExperiences, setHackingExperiences] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const newList = [];
    setCarregando(true);

    db.collection("usuarios_desafios")
      .where("user_email", "==", email)
      .get()
      .then(async (querySnapshot) => {
        await querySnapshot.forEach( (docUsuariosDesafios) => {
          const id_desafio = docUsuariosDesafios.data().id_desafio;
          db.collection("desafios")
            .doc(id_desafio)
            .get()
            .then((docDesafio) => {
              if (docDesafio.exists) {
                const docData = docDesafio.data();
                newList.push(docData);
              }
            });
        });
        console.log(newList);
        await setHackingExperiences([...newList]);
        console.log(hackingExperiences);

        setCarregando(false);
      })
      .catch(e => console.log(e));
  }, []);

  function toggleCard(id) {
    if (currentSelectedExperience === id) {
      setCurrentSelectedExperience("");
    } else {
      setCurrentSelectedExperience(id);
    }
  }

  function updateDeclaration(id) {
    const myElement = hackingExperiences.find((e) => e.titulo === id);
    myElement.depoimento = declaration;
    setHackingExperiences([...hackingExperiences]);
    setDeclaration("");
  }

  function getHackingExperiencesComponent() {
    console.log("função")
    return hackingExperiences.map((experience) => {
      return (
        <Card key={experience.title}>
          <Card.Title onClick={() => toggleCard(experience.titulo)}>
            {experience.titulo} <Icon.ChevronCompactDown />
          </Card.Title>
          {currentSelectedExperience === experience.titulo ? (
            <Card.Body>
              <Col xs={12}>
                Data/Hora: {experience.data} {experience.hora}
              </Col>
              <Col xs={12}>Descrição do evento: {experience.descricao}</Col>
              <Col xs={12}>Contato da empresa: {experience.usuarioEmail}</Col>
              {experience.depoimento === "" ||
              experience.depoimento === undefined ? (
                <Form>
                  <Form.Label>Como foi a sua experiência?</Form.Label>
                  <Form.Input
                    as="textarea"
                    rows={3}
                    onChange={(e) => setDeclaration(e.target.value)}
                  />
                  <Button
                    onClick={() => updateDeclaration(experience.titulo)}
                    variant="primary"
                  >
                    Salvar
                  </Button>
                </Form>
              ) : (
                <Col xs={12}>Depoimento: {experience.depoimento}</Col>
              )}
            </Card.Body>
          ) : null}
        </Card>
      );
    });
  }

  return (
    <>
      {useSelector((state) => state.usuarioLogado) === 0 ? (
        <Redirect to="/" />
      ) : null}

      <Navbar></Navbar>
      
      <Container fluid>
        {carregando ? <Loading></Loading> : getHackingExperiencesComponent()}
      </Container>

      <Footer></Footer>
    </>
  );
}

export default Profile;
