import React, { useState } from "react";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Button,
  ListGroup,
  Card,
  Col,
  Form,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Navbar from "../../compenentes/navbar";
import Footer from "../../compenentes/footer";

function Profile() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(
    useSelector((state) => state.usuarioEmail)
  );
  const [currentSelectedExperience, setCurrentSelectedExperience] = useState();

  const [declaration, setDeclaration] = useState();
  const [hackingExperiences, setHackingExperiences] = useState(() => {
    const newList = [
        {
          data: "2021-01-15",
          descricao: "teste",
          hora: "11:00",
          titulo: "Teste",
          usuarioEmail: "teste@hackland.com",
          depoimento:""
        },{
          data: "2021-01-15",
          descricao: "teste",
          hora: "11:00",
          titulo: "Teste 2",
          usuarioEmail: "teste@hackland.com",
          depoimento:""
        }
      ];
    return newList;
  });

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
  

  const hacking_experiences_components = hackingExperiences.map(
    (experience) => {
      return (
        <Card >
          <Card.Title onClick={() => toggleCard(experience.titulo)}>{experience.titulo} <Icon.ChevronCompactDown /></Card.Title>
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
                    <Form.Control
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
                ) : <Col xs={12}>Depoimento: {experience.depoimento}</Col>}
              </Card.Body>
          ) : null}
        </Card>
      );
    }
  );

  return (
    <>
      {useSelector((state) => state.usuarioLogado) === 0 ? (
        <Redirect to="/" />
      ) : null}

      <Navbar></Navbar>
      <Container>
        <ListGroup>{hacking_experiences_components}</ListGroup>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Profile;
